var mongoose = require('mongoose');

const UserShema = new mongoose.Schema({

  email: String,
  password: String,
  quote: {type: String, default: "GOT NOT QUOTE"}
/*
 name: String,
 email:String,
 password: String,
 cpassword: Boolean
 */
});

const User = mongoose.model('User', UserShema, 'users')

module.exports = User
