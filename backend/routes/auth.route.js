const express = require('express')
const router = express.Router()


// Load Controllers
const {
    registerController,
    activationController,
    signinController,
    forgotPasswordController,
    resetPasswordController,
    googleController,
    facebookController,
    sendOTPcontroller,
    verifycontroller,
    sendOTPcontrollerl,
    verifycontrollerl,
} = require('../controllers/auth.controller')


const {
    validSign,
    validLogin,
    forgotPasswordValidator,
    resetPasswordValidator
} = require('../helpers/valid')

router.post('/register',
    validSign,
    registerController)

router.post('/login',
    validLogin, signinController)

router.post('/activation', activationController)


router.get("/sendotp", sendOTPcontroller);
router.get("/sendotpl", sendOTPcontrollerl);


router.post('/verify', verifycontroller);
router.post('/verifyl', verifycontrollerl);



// forgot reset password
router.put('/forgotpassword', forgotPasswordValidator, forgotPasswordController);
router.put('/resetpassword', resetPasswordValidator, resetPasswordController);

// Google and Facebook Login
router.post('/googlelogin', googleController)
router.post('/facebooklogin', facebookController)
module.exports = router