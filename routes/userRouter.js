const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')

router.get('/', userController.getAll)
router.get('/getAllUsersWithSubscriptionsAndNo', userController.getAllUsersWithSubscriptionsAndNo)
router.get('/users', userController.getAllUsersWithSubscriptions)
router.get('/not-following', userController.getAllUsersWithNoSubscriptions)
router.get('/max-following', userController.getTop5UsersWithMaxSubscriptions)
router.get('/friends', userController.getFriends)

module.exports = router