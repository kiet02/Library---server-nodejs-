const express = require('express');
const router = express.Router();
const { verifyToken } = require('../middleware/auth.middleware');
const userController = require('../controllers/user.controller');
router.post('/register',userController.register);
router.post('/login', userController.login);
router.get('/profile', verifyToken, userController.getProfile);
router.put('/profile', verifyToken, userController.updateProfile);

router.route('/change-password')
    .post(verifyToken, userController.changePassword);

module.exports = router;

