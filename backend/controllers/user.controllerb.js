const User = require('../models/bloodbank');
const expressJwt = require('express-jwt');

exports.readControllerb = (req, res) => {
    console.log("coming9");
    const userId = req.params.id;
    console.log(userId);
    User.findById(userId).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        user.hashed_password = undefined;
        user.salt = undefined;
        res.json(user);
    });
};

exports.updateControllerb = (req, res) => {
    
    // console.log('UPDATE USER - req.user', req.user, 'UPDATE DATA', req.body);
    const { name, password,phone_number,city,state,address,parental_hospital_name,/*category,License_no,*/A_p,A_m,B_p,B_m,AB_p,AB_m,O_p,O_m} = req.body;

    User.findOne({ _id: req.user._id }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        if (!name) {
            return res.status(400).json({
                error: 'Name is required'
            });
        } else {
            user.name = name;
        }

        if (password) {
            if (password.length < 6) {
                return res.status(400).json({
                    error: 'Password should be min 6 characters long'
                });
            } else {
                user.password = password;
            }
        }

        user.phone_number = phone_number;
        user.city = city;
        user.state = state;
        user.address = address;
        user.parental_hospital_name = parental_hospital_name;
        /*user.category = category;
        user.License_no = License_no;*/
        user.A_p = A_p;
        user.A_m = A_m;
        user.B_p = B_p;
        user.B_m = B_m;
        user.AB_p = AB_p;
        user.AB_m = AB_m;
        user.O_p = O_p;
        user.O_m = O_m;


        user.save((err, updatedUser) => {
            if (err) {
                console.log('USER UPDATE ERROR', err);
                return res.status(400).json({
                    error: 'User update failed'
                });
            }
            updatedUser.hashed_password = undefined;
            updatedUser.salt = undefined;
            res.json(updatedUser);
        });
    });
};