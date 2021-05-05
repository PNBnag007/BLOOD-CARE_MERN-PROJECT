const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const crypto = require('crypto');

const Schema = mongoose.Schema;

const bloodbankSchema = new Schema({
    name: { type: String, required: true ,trim: true},
    email: { type: String, required: true, unique: true,trim: true, lowercase: true},
    //password: { type: String, required: true, minlength: 6 },
    //image: { type: String, required: true },
    phone_number:{ type: String, required: true },
    city:{ type: String, required: true },
    state:{ type: String, required: true },
    address:{ type: String, required: true },
    parental_hospital_name:{ type: String, required: true },
    category:{ type: String, required: true },
    License_no:{ type: String, required: true },
    A_p :{ type: String, required: true },
    A_m :{ type: String, required: true },
    B_p :{ type: String, required: true },
    B_m :{ type: String, required: true },
    AB_p :{ type: String, required: true },
    AB_m :{ type: String, required: true },
    O_p :{ type: String, required: true },
    O_m :{ type: String, required: true },
    //age : { type: Number, required: true },

    hashed_password: {
      type: String,
      required: true
    },
    salt: String,
    role: {
      type: String,
      default: 'bloodbank'
    },
    resetPasswordLink: {
      data: String,
      default: ''
    }
  },
  {
    timestamps: true
  }
  );

  bloodbankSchema.plugin(uniqueValidator);

  // virtual
bloodbankSchema
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
bloodbankSchema.methods = {
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


module.exports = mongoose.model('bloodbank', bloodbankSchema);
