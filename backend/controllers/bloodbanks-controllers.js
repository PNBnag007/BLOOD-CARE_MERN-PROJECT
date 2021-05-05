const { validationResult } = require('express-validator');
const mongoose = require('mongoose');

const HttpError = require('../models/http-error');
const BloodBank = require('../models/bloodbank');

const getbloodbanks = async (req, res, next) => {
    let bloodbanks;
    try {
      bloodbanks = await BloodBank.find({}, '-password');
    } catch (err) {
      const error = new HttpError(
        'Fetching bloodbanks failed, please try again later.',
        500
      );
      return next(error);
    }
    res.json({ bloodbanks: bloodbanks.map(bloodbank => bloodbank.toObject({ getters: true })) });
  };


const getbloodbankById = async (req, res, next) => {
    const bloodbankById = req.params.bid;
  
    let bloodbanks;
    try {
        bloodbanks = await BloodBank.findById(bloodbankById);
    } catch (err) {
      const error = new HttpError(
        'Something went wrong, could not find a bloodbanks.',
        500
      );
      return next(error);
    }
  
    if (!bloodbanks) {
      const error = new HttpError(
        'Could not find bloodbank for the provided id.',
        404
      );
      return next(error);
    }
  
    res.json({ bloodbanks: bloodbanks.toObject({ getters: true }) });
  };

const createbloodbank= async (req, res, next) => {
  // console.log("hello");
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(
        new HttpError('Invalid inputs passed, please check your data.', 422)
      );
    }

    const { name,email,phone_number,image,age,password,city,state,address ,parental_hospital_name,
      category,
      License_no,
      A_p ,
      A_m ,
      B_p ,
      B_m ,
      AB_p ,
      AB_m ,
      O_p ,
      O_m,} = req.body;


    const createdPlace = new BloodBank({
      name,
      email,
      address,
      city,
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/400px-Empire_State_Building_%28aerial_view%29.jpg', // => File Upload module, will be replaced with real image url
      
      phone_number,
      age,
      password,
      state,
      parental_hospital_name,
      category,
      License_no,
      A_p ,
      A_m ,
      B_p ,
      B_m ,
      AB_p ,
      AB_m ,
      O_p,
      O_m,
    });
  
    // let user;
    // try {
    //   user = await User.findById(creator);
    // } catch (err) {
    //   const error = new HttpError(
    //     'Creating place failed, please try again.',
    //     500
    //   );
    //   return next(error);
    // }
  
    // if (!user) {
    //   const error = new HttpError('Could not find user for provided id.', 404);
    //   return next(error);
    // }
  
    // console.log(user);
  
    try {
      const sess = await mongoose.startSession();
      sess.startTransaction();
      await createdPlace.save({ session: sess }); 
      // user.places.push(createdPlace); 
      //await user.save({ session: sess }); 
      await sess.commitTransaction();
    } catch (err) {
      console.log(err);
      const error = new HttpError(
        'Creating blood banks failed, please try again.',
        500
      );
      return next(error);
    }
  
    res.status(201).json({ bloodbank: createdPlace });
  };

  const updatebloodbank = async (req,res,next) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(
        new HttpError('Invalid inputs passed, please check your data.', 422)
      );
    }
    const { name,parental_hospital_name,category,License_no,A_p,A_m,B_p,
      B_m ,
      AB_p ,
      AB_m ,
      O_p,
      O_m,} = req.body;
  
    const BloodBankId = req.params.pid;
    
    let bloodbank;
    try {
      bloodbank = await BloodBank.findById(BloodBankId);
    } catch (err) {
      const error = new HttpError(
        `Something went wrong, could not update User ${BloodBankId}.'`,
        500
      );
      return next(error);
    }
    if (typeof name !== 'undefined')
    bloodbank.name = name;
    if (typeof parental_hospital_name !== 'undefined')
    bloodbank.parental_hospital_name = parental_hospital_name;
    if (typeof category !== 'undefined')
    bloodbank.category = category;
    if (typeof License_no !== 'undefined')
    bloodbank.License_no = License_no;
    if (typeof A_p !== 'undefined')
    bloodbank.A_p = A_p;
    if (typeof A_m !== 'undefined')
    bloodbank.A_m = A_m;
    if (typeof B_p !== 'undefined')
    bloodbank.B_p = B_p;
    if (typeof B_m !== 'undefined')
    bloodbank.B_m = B_m;
    if (typeof AB_p !== 'undefined')
    bloodbank.AB_p = AB_p;
    if (typeof AB_m !== 'undefined')
    bloodbank.AB_m = AB_m;
    if (typeof O_p !== 'undefined')
    bloodbank.O_p = O_p;
    if (typeof O_m !== 'undefined')
    bloodbank.O_m = O_m;
    
    // if (typeof age !== 'undefined')
    // bloodbank.age = age;
    // if (typeof phone_number !== 'undefined')
    // bloodbank.phone_number = phone_number;
    // if (typeof blood_group !== 'undefined')
    // bloodbank.blood_group = blood_group;
    // if (typeof city !== 'undefined')
    // bloodbank.city = city;
    // if (typeof state !== 'undefined')
    // bloodbank.state = state;
    // if (typeof address !== 'undefined')
    // bloodbank.address = address;
    
    console.log(req.body)
  
    try {
      await bloodbank.save();
    } catch (err) {
      console.log(err)
      const error = new HttpError(
        `Something went wrong, could not update User error ${err}   ${bloodbank}. Body ${req.body}'`,
        500
      );
      return next(error);
    }
  
    res.status(200).json({ bloodbank: bloodbank.toObject({ getters: true }) });
  }



exports.getbloodbanks = getbloodbanks;
exports.getbloodbankById = getbloodbankById;
exports.createbloodbank = createbloodbank;
exports.updatebloodbank = updatebloodbank;


  