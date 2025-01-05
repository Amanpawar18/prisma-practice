const express =  require('express');
const router = express.Router()

const {signup, logout, login} = require('../controllers/userController')

router.route('/signup').post(signup)
router.route("/login").post(login);
router.route("/logout").post(logout);
module.exports = router
