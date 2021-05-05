const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    bloodbankId: { type: String, required: true,unique: false  },
    userskey: { type: String,  unique: false },
    bloodType: { type: String, required: true, },
    quantity: { type: String, required: true },
  });

  orderSchema.plugin(uniqueValidator);

  module.exports = mongoose.model('order', orderSchema);