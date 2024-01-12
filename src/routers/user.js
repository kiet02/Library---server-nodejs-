const router = require('express').Router()
const user =  require('../controllers')
import vetifytoken from '../middlewares/verify_token'


router.get('/register',user.Register)
router.get('/login',user.Login)
router.get('/comment',user.Comment)

router.use(vetifytoken)

router.get('/getCurrent',user.getCurrent)


module.exports = router