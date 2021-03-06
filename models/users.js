var mongoose = require('mongoose');

const UserShema = new mongoose.Schema({

  email: String,
  password: String,
  quote: {type: String, default: "You got NO motto. Set it up"},
  pin: {type: String, default: "1111"},
  pinValidation: {type: Boolean, default: false},
  topScore: {type: Number, default: 0},
  totalRows: {type: Number, default: 0},
  spendedTime: {type: Number, default: 0}


/*
 name: String,
 email:String,
 password: String,
 cpassword: Boolean
 */
});

const User = mongoose.model('User', UserShema, 'gameusers')

module.exports = User
