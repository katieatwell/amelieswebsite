var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
const AuthUserSchema = new Schema({

  name: {
    type: String,
    trim: true,
    required: "Username is Required"
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    // Once we move onto Bcrypt, this function isn't required, but if we think of something needing validation here, I'll  leave it as an example.
    // validate: [
    //   function(input) {
    //     return input.length >= 6;
    //   },
    //   "Password should be longer."
    // ]
  },
  //also leaving email here in case we decide to add email verification??? I'd rather not but we might have to as...
  //second forms of validation are important.
  // email: {
  //   type: String,
  //   unique: true,
  //   match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  // },
  // `date` must be of type Date. The default value is the current date
  userCreated: {
    type: Date,
    default: Date.now
  }
});

// This creates our model from the above schema, using mongoose's model method
const AuthUser = mongoose.model("AuthUser", AuthUserSchema);

// Export the User model
module.exports = AuthUser;
