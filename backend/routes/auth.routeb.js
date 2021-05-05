const express = require('express')
const router = express.Router()

// Load Controllers
const {
    registerControllerb,
    activationControllerb,
    signinControllerb,
    forgotPasswordControllerb,
    resetPasswordControllerb,
    googleControllerb,
    facebookControllerb,

    sendOTPcontrollerb,
    verifycontrollerb,
    sendOTPcontrollerbl,
    verifycontrollerbl
} = require('../controllers/auth.controllerb')


const {
    validSignb,
    validLoginb,
    forgotPasswordValidatorb,
    resetPasswordValidatorb
} = require('../helpers/validb')

router.post('/registerb',
    validSignb,
    registerControllerb)

router.post('/loginb',
    validLoginb, signinControllerb)

router.get("/sendotpb", sendOTPcontrollerb);
router.get("/sendotpbl", sendOTPcontrollerbl);

router.post('/verifyb', verifycontrollerb);
router.post('/verifybl', verifycontrollerbl);
  
router.post('/activationb', activationControllerb)

// forgot reset password
router.put('/forgotpasswordb', forgotPasswordValidatorb, forgotPasswordControllerb);
router.put('/resetpasswordb', resetPasswordValidatorb, resetPasswordControllerb);

// Google and Facebook Login
router.post('/googleloginb', googleControllerb)
router.post('/facebookloginb', facebookControllerb)
module.exports = router