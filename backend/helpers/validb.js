const {
    check
} = require('express-validator');
exports.validSignb = [
    check('name', 'Name is required').notEmpty()
    .isLength({
        min: 4,
        max: 32
    }).withMessage('name must be between 3 to 32 characters'),
    check('email')
    .isEmail()
    .withMessage('Must be a valid email address'),
    check('password', 'password is required').notEmpty(),
    check('password').isLength({
        min: 6
    }).withMessage('Password must contain at least 6 characters').matches(/\d/).withMessage('password must contain a number'),
    check('phone_number', 'phone number is required').notEmpty()
    .isLength({
        min: 10,
        max: 10
    }).withMessage('phone number must be 10 digits'),
    check('city', 'city is required').notEmpty()
    .isLength({
        min: 1,
        max: 32
    }).withMessage('city must be between 3 to 32 characters'),
    check('state', 'state is required').notEmpty()
    .isLength({
        min: 1,
        max: 32
    }).withMessage('state must be between 3 to 32 characters'),
    check('address', 'address is required').notEmpty()
    .isLength({
        min: 4
    }).withMessage('address must be between 3 to 32 characters'),
    check('parental_hospital_name', 'parental_hospital_name is required').notEmpty()
    .isLength({
        min: 0,
        max: 32
    }).withMessage('parental_hospital_name must be between 3 to 32 characters'),
    check('category', 'category is required').notEmpty()
    .isLength({
        min: 0,
        max: 32
    }).withMessage('category must be between 3 to 32 characters'),
    check('License_no', 'License_no is required').notEmpty()
    .isLength({
        min: 0,
        max: 32
    }).withMessage('License_no must be between 3 to 32 characters')

]

exports.validLoginb = [
    check('email')
    .isEmail()
    .withMessage('Must be a valid email address'),
    check('password', 'password is required').notEmpty(),
    check('password').isLength({
        min: 6
    }).withMessage('Password must contain at least 6 characters').matches(/\d/).withMessage('password must contain a number')
]


exports.forgotPasswordValidatorb = [
    check('email')
        .not()
        .isEmpty()
        .isEmail()
        .withMessage('Must be a valid email address')
];

exports.resetPasswordValidatorb = [
    check('newPassword')
        .not()
        .isEmpty()
        .isLength({ min: 6 })
        .withMessage('Password must be at least  6 characters long')
];