const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  user_name: String,
  user_email: String,
  user_password: String,
  user_followers: Number,
  user_following: Number,
  user_handle: String,
});

module.exports = mongoose.model("User", userSchema);
