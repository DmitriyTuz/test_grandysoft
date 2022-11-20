const db = require('../models')
const Sequelize = require('sequelize')
const { QueryTypes } = require('sequelize')

const ApiError = require('../error/ApiError')

const {userA, userB, subscription, friend} = require('../models/index')
const {getAllUsersS, getUsersS} = require("../utils/userFunctions");

class UserController {

    async getAll(req, res) {
        const users = await userA.findAll()
        return res.json(users)
    }

    async getAllUsersWithSubscriptions(req, res, next) {

        try {
            const users = await getAllUsersS()
            return res.json(users)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAllUsersWithNoSubscriptions(req, res) {

        const users = await getAllUsersS()

        let arrUsersIdWithNoS = []

        for (let i = 0; i < users.length; i++) {
            if (users[i].dataValues.userBs[0] == undefined) {
                arrUsersIdWithNoS.push(users[i].dataValues.id)
            }
        }

        let result
        let resultArr = []

        for (let i = 0; i < arrUsersIdWithNoS.length; i++) {
            result = await userA.findAll(
                { where: {id: arrUsersIdWithNoS[i]}
                })
        resultArr.push(result)
        }

        return res.json(resultArr)
    }

    async getTop5UsersWithMaxSubscriptions(req, res) {

        const users = await getAllUsersS()

        let lengthArr = []

        for (let i = 0; i < users.length; i++) {
            let length = users[i].dataValues.userBs.length
            lengthArr.push(length)
        }

        const maxFive = (arr) => arr.slice().sort((a, b) => b - a).slice(0, 5)

        let maxFiveLengthArr = maxFive(lengthArr)
        let resultIdArrAll = []

        for (let j = 0; j < maxFiveLengthArr.length; j++) {
            for (let i = 0; i < users.length; i++) {
                if (users[i].dataValues.userBs.length === maxFiveLengthArr[j]) {
                    resultIdArrAll.push(users[i].dataValues.id)
                }
            }
        }
        let resultIdArrFive = resultIdArrAll.slice(0, 5)

        let result
        let resultArr = []

        for (let i = 0; i < resultIdArrFive.length; i++) {
            result = await userA.findAll(
                { where: {id: resultIdArrFive[i]}
                })
            resultArr.push(result[0])
        }

        return res.json(resultArr)
    }

    async getFriendsAndPutToDatabase(req, res) {

        const users = await getUsersS()

        let count = 0
        let friendsIdArr = []

        for (let i = 0; i < users.length; i++) {
            for (let j = 0; j < users[i].dataValues.userBs.length; j++) {
                let sub = await subscription.findAll(
                    {
                            where:
                                {
                                    userAId: users[i].dataValues.userBs[j].id,
                                    userBId: users[i].dataValues.id
                                }
                            })
                if (sub[0] !== undefined) {
                    count++
                    if (!friendsIdArr.includes(sub[0].userAId)) {
                        friendsIdArr.push(sub[0].userAId)
                    }

                    if (!friendsIdArr.includes(sub[0].userBId)) {
                        friendsIdArr.push(sub[0].userBId)
                    }
                }

            }
        }
        // friendsIdArr.sort((a, b) => a - b)


        let resultArr = []


        for (let i = 0; i < friendsIdArr.length; i++) {
            let result = await userA.findAll(
                {
                    where: {id: friendsIdArr[i]
                    }
                })

            resultArr.push(result[0])
        }

        for (let i = 0; i < resultArr.length; i++) {
            await friend.create({
                id: resultArr[i].id,
                first_name: resultArr[i].first_name,
                gender: resultArr[i].gender
            })
        }

        return res.json(resultArr)
    }

    async getFriendsWithOrder(req, res) {

        const {order_by, order_type} = req.query

        let query = `SELECT * FROM "friends" ORDER BY ${order_by} ${order_type}`
        let result = await db.sequelize.query(query, {type: db.sequelize.QueryTypes.SELECT})

        return res.json(result)
    }

}

module.exports = new UserController()