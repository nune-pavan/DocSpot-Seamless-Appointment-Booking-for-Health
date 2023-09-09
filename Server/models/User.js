const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    default: "",
  },
  email: {
    type: String,
    required: true,
    default: "",
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  phoneNo: {
    type: String,
    required: true,
    default: "",
    unique: true,
    trim: true,
    match: [/^\d{10}$/, "Please enter a valid 10-digit phone number"],
  },
  prescription: {
    type: [String],
    default: [],
  },
  location: {
    type: String,
    default: "",
  },
  appointments: {
    type: [String],
    default: [],
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
