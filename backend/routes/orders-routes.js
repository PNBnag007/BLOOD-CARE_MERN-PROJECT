const express = require('express');
const { check } = require('express-validator');

const ordersController = require('../controllers/orders-controllers');

const router = express.Router();

router.post(
    '/',
    [],
    ordersController.createorders
);

module.exports = router;