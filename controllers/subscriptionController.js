const {subscription} = require('../models/index')
const ApiError = require('../error/ApiError')

class SubscriptionController {
    async createSubscription(req, res, next) {
        try {
            const {userAId, userBId} = req.body
            const sob = await subscription.create({userAId: userAId, userBId: userBId})
            return res.json(sob)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new SubscriptionController()