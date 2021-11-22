const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  email: {
    type: String,
    // validate: {
    //   validator: function (v) {
    //     return /\S+@\S+\.\S+/.test(v);
    //   },
  },
  phone_number: { type: Number, required: true },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user", userSchema);
