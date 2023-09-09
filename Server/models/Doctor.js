const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
  },
  registrationNumber: {
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
  address: {
    type: String,
    default: "",
  },
  profilePicture: {
    type: String,
    default: "",
  },
  rating: {
    type: Number,
    default: 0,
  },
  numRating: {
    type: Number,
    default: 0,
  },
  education: {
    type: [String],
    default: [],
  },
  specialization: {
    type: [String],
    default: [],
  },
  availableHours: {
    type: [String],
    default: [],
  },
  isAvailable: {
    type: Boolean,
    default: false,
  },
});

const Doctor = mongoose.model("Doctors", doctorSchema);

module.exports = Doctor;
