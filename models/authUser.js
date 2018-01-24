var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const AuthUserSchema = new Schema({

  name: {
    type: String,
    unique: true,
    trim: true,
    required: "Username is Required"
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
  },
  //also leaving email here in case we decide to add email verification??? I'd rather not but we might have to as...
  //second forms of validation are important.
  // email: {
  //   type: String,
  //   unique: true,
  //   match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  // },
  userCreated: { //another identifier if we need it for tokens
    type: Date,
    default: Date.now
  }
});

const AuthUser = mongoose.model("AuthUser", AuthUserSchema);
module.exports = AuthUser;
