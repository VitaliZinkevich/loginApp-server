var mongoose = require('mongoose');

const UserShema = new mongoose.Schema({

  email: String,
  password: String,
  quote: {type: String, default: "GOT NOT QUOTE"},
  pin: {type: String, default: "1111"},
  pinValidation: {type: Boolean, default: false}
/*
 name: String,
 email:String,
 password: String,
 cpassword: Boolean
 */
});

const User = mongoose.model('User', UserShema, 'newusers')

module.exports = User
