const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  phoneNo: {
    type: String,
    default: "",
  },
  about: {
    type: String,
    default: "",
  },
  diseases: {
    type: [String],
    default: [],
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

const Patient = mongoose.model("Patient", patientSchema);
module.exports = Patient;
