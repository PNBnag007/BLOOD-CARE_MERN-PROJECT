const express = require('express');
const router = express.Router();

// import controller
const { requireSigninb, adminMiddlewareb } = require('../controllers/auth.controllerb');
const { readControllerb, updateControllerb } = require('../controllers/user.controllerb');

router.get('/userb/:id', requireSigninb, readControllerb);
router.put('/userb/update', requireSigninb, updateControllerb);
router.put('/adminb/update', requireSigninb, adminMiddlewareb, updateControllerb);

module.exports = router;