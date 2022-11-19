const Router = require('express')
const router = new Router()

const userRouter = require('./userRouter')
const subscriptionRouter = require('./subscriptionRouter')


router.use('/users', userRouter)
router.use('/subscription', subscriptionRouter)


module.exports = router