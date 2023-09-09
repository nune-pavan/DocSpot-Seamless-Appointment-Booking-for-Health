const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  email: {
    type: String,
    default: "",
  },
  phoneNo: {
    type: String,
    default: "",
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
