const mongoose = require('mongoose');





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

const User = moongoose.model('User', UserShema)


module.export = User
