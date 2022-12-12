const {userA, userB, subscription, friend} = require('../models/index')

class userFunctions {

    async getAllUsersS() {

        return await userA.findAll({
            attributes: ["id", "first_name", "gender"],
            separate: true,
            order: [['id']],
            include: [{
                model: userB, attributes: ["id", "first_name", "gender"],
                required: false
            }]
        })
    }

    async getUsersS() {

        return await userA.findAll({
            attributes: ["id", "first_name", "gender"],
            separate: true,
            order: [['id']],
            // order: [['userBs'.length]],
            // limit: 5,
            include: [{
                model: userB, attributes: ["id", "first_name", "gender"],
                required: true
            }]
        })
    }

}

module.exports = new userFunctions()