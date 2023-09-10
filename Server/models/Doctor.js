const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
  registrationNumber: {
    type: String,
    default: "",
    trim: true,
  },
  phoneNo: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
    trim: true,
  },
  profilePicture: {
    type: String,
    default: "",
    trim: true,
  },
  fees: {
    type: Number,
    default: 0,
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
  appointmentsScheduled: {
    type: [String],
    default: [],
  },
});

const Doctor = mongoose.model("Doctors", doctorSchema);

module.exports = Doctor;
