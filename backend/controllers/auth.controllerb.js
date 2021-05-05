const User = require('../models/bloodbank');
const expressJwt = require('express-jwt');
const _ = require('lodash');
const { OAuth2Client } = require('google-auth-library');
const fetch = require('node-fetch');

const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');
const { errorHandler } = require('../helpers/dbErrorHandling');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey("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");

var otpGenerator = require("otp-generator");
const TwoFactor = new (require("2factor"))(
  "d8be121d-cbe4-11ea-9fa5-0200cd936042"
);




exports.registerControllerb = (req, res) => {
  const { name, email, password,phone_number,city,state,address,parental_hospital_name,category,License_no} = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const firstError = errors.array().map(error => error.msg)[0];
    return res.status(422).json({
      errors: firstError
    });
  } else {
    User.findOne({
      email
    }).exec((err, user) => {
      if (user) {
        return res.status(400).json({
          errors: 'Email is taken'
        });
      }
    });

    const token = jwt.sign(
      {
        name,
        email,
        password,
        phone_number,city,state,address,parental_hospital_name,category,License_no
      },
      "mymagic5112142Activation",
      {
        expiresIn: '5m'
      }
    );

    const emailData = {
      from: "btpmail286@gmail.com",
      to: email,
      subject: 'Account activation link',
      html: `
                <h1>Please use the following to activate your account</h1>
                <p>http://localhost:3000/users/activateb/${token}</p>
                <hr />
                <p>This email may containe sensetive information</p>
                <p>http://localhost:3000</p>
            `
    };

    sgMail
      .send(emailData)
      .then(sent => {
        return res.json({
          message: `Email has been sent to ${email}`
        });
      })
      .catch(err => {
        return res.status(400).json({
          success: false,
          errors: errorHandler(err)
        });
      });
  }
};
var user;
//var {_id, name, email,phone_number,city,state,address,blood_group,age, role};
var userl;
var token;

exports.activationControllerb = (req, res,next) => {
  const { token } = req.body;

  if (token) {
    jwt.verify(token, "mymagic5112142Activation", (err, decoded) => {
      if (err) {
        console.log('Activation error');
        return res.status(401).json({
          errors: 'Expired link. Signup again'
        });
      } else {
        const { name, email, password,phone_number,city,state,address,parental_hospital_name,category,License_no } = jwt.decode(token);

        console.log(email);
        user = new User({
          name,
          email,
          password,
          phone_number,city,state,address,parental_hospital_name,category,License_no,
          A_p :'0',
          A_m :'0',
          B_p :'0',
          B_m :'0',
          AB_p :'0',
          AB_m :'0',
          O_p :'0',
          O_m :'0'
        });
        res.redirect("/api/sendotpb");
        /*user.save((err, user) => {
          if (err) {
            console.log(err);
            console.log('Save error', errorHandler(err));
            return res.status(401).json({
              errors: errorHandler(err)
            });
          } else {
            return res.json({
              success: true,
              message: user,
              message: 'Signup success'
            });
          }
        });*/
      }
    });
  } else {
    return res.json({
      message: 'error happening please try again'
    });
  }
};

exports.sendOTPcontrollerb = (req, res,next) => {
  console.log("coming");
  console.log(user.phone_number);
  TwoFactor.sendOTP(user.phone_number).then(
    (sessionId) => {
      session = sessionId;
    },
    (error) => {
      console.log(error);
    }
  );
  res.redirect('/api/verifyb')
};

exports.verifycontrollerb = (req, res,next) => {
  const { otp } = req.body;
    let errors = [];
    if (!otp) {
      errors.push({ msg: "Please enter OTP" });
    }
    if (errors.length > 0) {
      res.render('verify', {
        errors,
        otp
      });
    } else {
      TwoFactor.verifyOTP(session, otp).then(
        (response) => {
          user
            .save()
            .then((user) => {
              return res.json({
                success: true,
                message: user,
                message: 'Signup success'
              });
              /*req.flash(
                "success_msg",
                "Account Created"
              );
              res.redirect("/api/login");*/
            })
            .catch((err) => console.log(err));
        },
        (error) => {
          req.flash(
            "error_msg",
            "Please re-enter the OTP"
          );
          res.redirect("/api/verifyb");
        }
      );
    }  
  };



exports.signinControllerb = (req, res) => {
  const { email, password } = req.body;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const firstError = errors.array().map(error => error.msg)[0];
    return res.status(422).json({
      errors: firstError
    });
  } else {
    // check if user exist
    User.findOne({
      email
    }).exec((err, user) => {
      if (err || !user) {
        return res.status(400).json({
          errors: 'User with that email does not exist. Please signup'
        });
      }
      // authenticate
      if (!user.authenticate(password)) {
        return res.status(400).json({
          errors: 'Email and password do not match'
        });
      }
      // generate a token and send to client
      token = jwt.sign(
        {
          _id: user._id
        },
        'supersecret_dont_share',
        {
          expiresIn: '7d'
        }
      );
      userl = user;
      res.redirect("/api/sendotpbl");
    });
  }
};

exports.sendOTPcontrollerbl = (req, res,next) => {
  console.log("coming2");
  console.log(userl.phone_number);
  TwoFactor.sendOTP(userl.phone_number).then(
    (sessionId) => {
      session = sessionId;
    },
    (error) => {
      console.log(error);
    }
  );
  res.redirect('/api/verifybl')
};

exports.verifycontrollerbl = (req, res,next) => {
  const { otp } = req.body;
    let errors = [];
    if (!otp) {
      errors.push({ msg: "Please enter OTP" });
    }
    if (errors.length > 0) {
      res.render('verify', {
        errors,
        otp
      });
    } else {
      TwoFactor.verifyOTP(session, otp).then(
        (response) => {
          return res.json({
            token: token,
            user: {
              _id:userl._id,
              name:userl.name,
              email:userl.email,
              phone_number:userl.phone_number,
              city:userl.city,
              state:userl.state,
              address:userl.address,
              parental_hospital_name:userl.parental_hospital_name,
              category:userl.category,
              License_no:userl.License_no,
              role:userl.role
            }
          });
          
        },
        (error) => {
          req.flash(
            "error_msg",
            "Please re-enter the OTP"
          );
          res.redirect("/api/verifybl");
        }
      );
    }  
  };



exports.requireSigninb = expressJwt({
  secret: 'supersecret_dont_share',algorithms: ['HS256'] //process.env.JWT_SECRET // req.user._id
});

exports.adminMiddlewareb = (req, res, next) => {
  User.findById({
    _id: req.user._id
  }).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'User not found'
      });
    }

    if (user.role !== 'admin') {
      return res.status(400).json({
        error: 'Admin resource. Access denied.'
      });
    }

    req.profile = user;
    next();
  });
};

exports.forgotPasswordControllerb = (req, res) => {
  const { email } = req.body;
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const firstError = errors.array().map(error => error.msg)[0];
    return res.status(422).json({
      errors: firstError
    });
  } else {
    User.findOne(
      {
        email
      },
      (err, user) => {
        if (err || !user) {
          return res.status(400).json({
            error: 'User with that email does not exist'
          });
        }

        const token = jwt.sign(
          {
            _id: user._id
          },
          "resetpassword",
          {
            expiresIn: '10m'
          }
        );

        const emailData = {
          from:"btpmail286@gmail.com",
          to: email,
          subject: `Password Reset link`,
          html: `
                    <h1>Please use the following link to reset your password</h1>
                    <p>http://localhost:3000/users/password/resetb/${token}</p>
                    <hr />
                    <p>This email may contain sensetive information</p>
                    <p>http://localhost:3000</p>
                `
        };

        return user.updateOne(
          {
            resetPasswordLink: token
          },
          (err, success) => {
            if (err) {
              console.log('RESET PASSWORD LINK ERROR', err);
              return res.status(400).json({
                error:
                  'Database connection error on user password forgot request'
              });
            } else {
              sgMail
                .send(emailData)
                .then(sent => {
                  // console.log('SIGNUP EMAIL SENT', sent)
                  return res.json({
                    message: `Email has been sent to ${email}. Follow the instruction to activate your account`
                  });
                })
                .catch(err => {
                  // console.log('SIGNUP EMAIL SENT ERROR', err)
                  return res.json({
                    message: err.message
                  });
                });
            }
          }
        );
      }
    );
  }
};

exports.resetPasswordControllerb = (req, res) => {
  const { resetPasswordLink, newPassword } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const firstError = errors.array().map(error => error.msg)[0];
    return res.status(422).json({
      errors: firstError
    });
  } else {
    if (resetPasswordLink) {
      jwt.verify(resetPasswordLink, "resetpassword", function(
        err,
        decoded
      ) {
        if (err) {
          return res.status(400).json({
            error: 'Expired link. Try again'
          });
        }

        User.findOne(
          {
            resetPasswordLink
          },
          (err, user) => {
            if (err || !user) {
              return res.status(400).json({
                error: 'Something went wrong. Try later'
              });
            }

            const updatedFields = {
              password: newPassword,
              resetPasswordLink: ''
            };

            user = _.extend(user, updatedFields);

            user.save((err, result) => {
              if (err) {
                return res.status(400).json({
                  error: 'Error resetting user password'
                });
              }
              res.json({
                message: `Great! Now you can login with your new password`
              });
            });
          }
        );
      });
    }
  }
};

const client = new OAuth2Client(process.env.GOOGLE_CLIENT);
// Google Login
exports.googleControllerb = (req, res) => {
  const { idToken } = req.body;

  client
    .verifyIdToken({ idToken, audience: process.env.GOOGLE_CLIENT })
    .then(response => {
      // console.log('GOOGLE LOGIN RESPONSE',response)
      const { email_verified, name, email } = response.payload;
      if (email_verified) {
        User.findOne({ email }).exec((err, user) => {
          if (user) {
            const token = jwt.sign({ _id: user._id }, "supersecret_dont_share", {
              expiresIn: '7d'
            });
            const { _id, email, name,phone_number,city,state,address,parental_hospital_name,category,License_no, role } = user;
            return res.json({
              token,
              user: { _id, email, name,phone_number,city,state,address,parental_hospital_name,category,License_no, role }
            });
          } else {
            let password = email + "supersecret_dont_share";
            user = new User({ name, email, password });
            user.save((err, data) => {
              if (err) {
                console.log('ERROR GOOGLE LOGIN ON USER SAVE', err);
                return res.status(400).json({
                  error: 'User signup failed with google'
                });
              }
              const token = jwt.sign(
                { _id: data._id },
                "supersecret_dont_share",
                { expiresIn: '7d' }
              );
              const { _id, email, name,phone_number,city,state,address,parental_hospital_name,category,License_no, role } = data;
              return res.json({
                token,
                user: { _id, email, name,phone_number,city,state,address,parental_hospital_name,category,License_no, role }
              });
            });
          }
        });
      } else {
        return res.status(400).json({
          error: 'Google login failed. Try again'
        });
      }
    });
};

exports.facebookControllerb = (req, res) => {
  console.log('FACEBOOK LOGIN REQ BODY', req.body);
  const { userID, accessToken } = req.body;

  const url = `https://graph.facebook.com/v2.11/${userID}/?fields=id,name,email&access_token=${accessToken}`;

  return (
    fetch(url, {
      method: 'GET'
    })
      .then(response => response.json())
      // .then(response => console.log(response))
      .then(response => {
        const { email, name } = response;
        User.findOne({ email }).exec((err, user) => {
          if (user) {
            const token = jwt.sign({ _id: user._id }, "supersecret_dont_share", {
              expiresIn: '7d'
            });
            const { _id, email, name,phone_number,city,state,address,parental_hospital_name,category,License_no, role } = user;
            return res.json({
              token,
              user: { _id, email, name,phone_number,city,state,address,parental_hospital_name,category,License_no, role }
            });
          } else {
            let password = email + "supersecret_dont_share";
            user = new User({ name, email, password });
            user.save((err, data) => {
              if (err) {
                console.log('ERROR FACEBOOK LOGIN ON USER SAVE', err);
                return res.status(400).json({
                  error: 'User signup failed with facebook'
                });
              }
              const token = jwt.sign(
                { _id: data._id },
                "supersecret_dont_share",
                { expiresIn: '7d' }
              );
              const { _id, email, name,phone_number,city,state,address,parental_hospital_name,category,License_no, role } = data;
              return res.json({
                token,
                user: { _id, email, name,phone_number,city,state,address,parental_hospital_name,category,License_no, role }
              });
            });
          }
        });
      })
      .catch(error => {
        res.json({
          error: 'Facebook login failed. Try later'
        });
      })
  );
};
