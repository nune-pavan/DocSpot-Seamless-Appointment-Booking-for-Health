const mongoose = require('mongoose');

const clinicSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  email: { type: String, default: "" },
  phoneNumber: { type: String, default: "" },
  prescription: { type: [String], default: [] },
  location: { type: String, default: "" },
  appointments: { type: [String], default: [] }
});

const Clinic = mongoose.model('Clinic', clinicSchema);

module.exports = Clinic;
