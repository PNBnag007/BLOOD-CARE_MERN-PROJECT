const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const crypto = require('crypto');
// user schema

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: { type: String, required: true ,trim: true},
    email: { type: String, required: true, unique: true,trim: true, lowercase: true},
    //password: { type: String, required: true, minlength: 6 },
    //image: { type: String, required: true },
    phone_number:{ type: String, required: true },
    city:{ type: String, required: true },
    state:{ type: String, required: true },
    address:{ type: String, required: true },
    blood_group : { type: String, required: true },
    age : { type: String, required: true },

    hashed_password: {
      type: String,
      required: true
    },
    salt: String,
    role: {
      type: String,
      default: 'user'
    },
    resetPasswordLink: {
      data: String,
      default: ''
    }
  },
  {
    timestamps: true
  });

  userSchema.plugin(uniqueValidator);

// virtual
userSchema
  .virtual('password')
  .set(function(password) {
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
  })
  .get(function() {
    return this._password;
  });

// methods
userSchema.methods = {
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function(password) {
    if (!password) return '';
    try {
      return crypto
        .createHmac('sha1', this.salt)
        .update(password)
        .digest('hex');
    } catch (err) {
      return '';
    }
  },

  makeSalt: function() {
    return Math.round(new Date().valueOf() * Math.random()) + '';
  }
};

module.exports = mongoose.model('user', userSchema);
