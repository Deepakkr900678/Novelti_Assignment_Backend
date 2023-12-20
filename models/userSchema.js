const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  address1: { type: String, required: true },
  address2: { type: String },
  state: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  zip: { type: Number, required: true },
});

const User = mongoose.model('User', userSchema)
module.exports = User;



