const Router = require('express')
const router = new Router()
const subscriptionController = require('../controllers/subscriptionController')

router.post('/createSubscription', subscriptionController.createSubscription)


module.exports = router