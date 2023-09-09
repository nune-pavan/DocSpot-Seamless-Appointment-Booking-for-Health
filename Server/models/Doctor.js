const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "",
    required: true,
    trim: true,
  },
  registrationNumber: {
    type: String,
    default: "",
    required: true,
    trim: true,
  },
  email: {
    type: String,
    default: "",
    trim: true,
    lowercase: true,
    unique: true,
  },
  phoneNo: {
    type: String,
    default: "",
    trim: true,
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
    min: 0,
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  numRating: {
    type: Number,
    default: 0,
    min: 0,
  },
  education: {
    type: [String],
    required: true,
    validate: {
      validator: function (educationArray) {
        return educationArray.length > 0;
      },
      message: "Education field must have at least one entry",
    },
  },
  specialization: {
    type: [String],
    required: true,
    validate: {
      validator: function (specializationArray) {
        return specializationArray.length > 0;
      },
      message: "Specialization field must have at least one entry",
    },
  },
  availableHours: {
    type: [String],
    required: true,
    validate: {
      validator: function (availableHoursArray) {
        return availableHoursArray.length > 0;
      },
      message: "Available hours field must have at least one entry",
    },
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
