const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const HttpError = require('../models/http-error');
const Order = require('../models/orders');


const createorders= async (req, res, next) => {
    // console.log("hello");
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(
          new HttpError('Invalid inputs passed, please check your data.', 422)
        );
      }
  
      const { 
        bloodbankId,
        userskey,
        bloodType,
        quantity,
      } = req.body;
  
  
      const createdorder = new Order({
        bloodbankId,
        userskey,
        bloodType,
        quantity,
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
        await createdorder.save({ session: sess }); 
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
    
      res.status(201).json({ order: createdorder });
    };
  
    exports.createorders = createorders;