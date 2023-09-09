const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  doctorId: {
    type: String,
    required: true,
  },
  patientId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["Pending", "Confirmed", "Completed", "Cancelled"],
    default: "Pending",
  },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;
