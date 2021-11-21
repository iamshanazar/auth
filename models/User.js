const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  name: { type: String, required: [true, "name is required"] },
  lastname: { type: String, required: [true, "lastname is required"] },
  email: {
    type: String,
    // validate: {
    //   validator: function (v) {
    //     return /\S+@\S+\.\S+/.test(v);
    //   },
    message: "Email is not valid",
  },
  phone_number: { type: Number, required: [true, "phone_number is required"] },
  password: {
    type: String,
    required: true,
    minlength: [6, "password must be 6 chracter"],
  },
});

module.exports = mongoose.model("user", userSchema);
