const express = require('express');
const { check } = require('express-validator');


const bloodbanksControllers = require('../controllers/bloodbanks-controllers');

const router = express.Router();

router.get('/', bloodbanksControllers.getbloodbanks);
router.get('/:bid', bloodbanksControllers.getbloodbankById);


router.patch(
    '/:pid',
    bloodbanksControllers.updatebloodbank
  );

router.post(
    '/',
    [],
    bloodbanksControllers.createbloodbank
);

module.exports = router;
