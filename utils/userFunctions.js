const {userA, userB, subscription, friend} = require('../models/index')

class userFunctions {

    async getAllUsersS() {
        const users = await userA.findAll({
            attributes: ["id", "first_name", "gender"],
            separate: true,
            order: [['id']],
            include: [{
                model: userB, attributes: ["id", "first_name", "gender"],
                required: false
            }]
        })

        return users
    }

    async getUsersS() {
        const users = await userA.findAll({
            attributes: ["id", "first_name", "gender"],
            separate: true,
            order: [['id']],
            include: [{
                model: userB, attributes: ["id", "first_name", "gender"],
                required: true
            }]
        })

        return users
    }

}

module.exports = new userFunctions()