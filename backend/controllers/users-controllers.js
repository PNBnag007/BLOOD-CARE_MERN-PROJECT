const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const User = require('../models/user');

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find({}, '-password');
  } catch (err) {
    const error = new HttpError(
      'Fetching users failed, please try again later.',
      500
    );
    return next(error);
  }
  res.json({ users: users.map(user => user.toObject({ getters: true })) });
};

const getUserById = async (req, res, next) => {
  const UserId = req.params.bid;

  let user;
  try {
      user = await User.findById(UserId);
  } catch (err) {
    const error = new HttpError(
      'Something went wrong, could not find a bloodbanks.',
      500
    );
    return next(error);
  }

  if (!user) {
    const error = new HttpError(
      'Could not find bloodbank for the provided id.',
      404
    );
    return next(error);
  }

  res.json({ user: user.toObject({ getters: true }) });
};



const updateUser = async (req,res,next) =>{
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(
      new HttpError('Invalid inputs passed, please check your data.', 422)
    );
  }
  const { age,phone_number,blood_group,city,state,address} = req.body;

  const UserId = req.params.pid;
  
  let user;
  try {
    user = await User.findById(UserId);
  } catch (err) {
    const error = new HttpError(
      `Something went wrong, could not update User ${UserId}.'`,
      500
    );
    return next(error);
  }
  if (typeof age !== 'undefined')
  user.age = age;
  if (typeof phone_number !== 'undefined')
  user.phone_number = phone_number;
  if (typeof blood_group !== 'undefined')
  user.blood_group = blood_group;
  if (typeof city !== 'undefined')
  user.city = city;
  if (typeof state !== 'undefined')
  user.state = state;
  if (typeof address !== 'undefined')
  user.address = address;


  try {
    await user.save();
  } catch (err) {
    const error = new HttpError(
      `Something went wrong, could not update User error ${err}   ${user}.'`,
      500
    );
    return next(error);
  }

  res.status(200).json({ user: user.toObject({ getters: true }) });
}




// const signup = async (req, res, next) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return next(
//         new HttpError('Invalid inputs passed, please check your data.', 422)
//       );
//     }
//     const { name, email, password } = req.body;
  
//     let existingUser;
//     try {
//       existingUser = await User.findOne({ email: email });
//     } catch (err) {
//       const error = new HttpError(
//         'Signing up failed, please try again later.',
//         500
//       );
//       return next(error);
//     }
  
//     if (existingUser) {
//       const error = new HttpError(
//         'User exists already, please login instead.',
//         422
//       );
//       return next(error);
//     }
  
//     const createdUser = new User({
//       name,
//       email,
//       image: 'https://live.staticflickr.com/7631/26849088292_36fc52ee90_b.jpg',
//       password,
//       places: []
//     });
  
//     try {
//       await createdUser.save();
//     } catch (err) {
//       const error = new HttpError(
//         'Signing up failed, please try again later.',
//         500
//       );
//       return next(error);
//     }
  
//     res.status(201).json({ user: createdUser.toObject({ getters: true }) });
//   };
  
// const login = async (req, res, next) => {
//     const { email, password } = req.body;
  
//     let existingUser;
  
//     try {
//       existingUser = await User.findOne({ email: email });
//     } catch (err) {
//       const error = new HttpError(
//         'Loggin in failed, please try again later.',
//         500
//       );
//       return next(error);
//     }
  
//     if (!existingUser || existingUser.password !== password) {
//       const error = new HttpError(
//         'Invalid credentials, could not log you in.',
//         401
//       );
//       return next(error);
//     }
  
//     res.json({
//       message: 'Logged in!',
//       user: existingUser.toObject({ getters: true })
//     });
//   };
  

exports.getUsers = getUsers;
exports.updateUser = updateUser;
exports.getUserById = getUserById;
//exports.signup = signup;
//exports.login = login;