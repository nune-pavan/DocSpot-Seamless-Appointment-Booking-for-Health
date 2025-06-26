const Patient = require("../models/Patient");
const PatientController = {
  getAllPatients: async (req, res) => {
    try {
      const patients = await Patient.find();
      if (!patients) {
        return res.status(404).json({ error: "No patients found" });
      }
      res.json(patients);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  getPatientById: async (req, res) => {
    try {
      const patient = await Patient.findById(req.params.id);
      if (!patient) {
        return res.status(404).json({ error: "Patient not found" });
      }
      res.json(patient);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  createPatient: async (req, res) => {
    try {
      const patientData = req.body;
      const existingPatient = await Patient.findOne({
        email: patientData.email,
      });
      if (existingPatient) {
        return res.status(400).json({ error: "Patient already exists" });
      }
      const patient = new Patient({
        ...patientData,
      });
      await patient.save();
      res.json(patient);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  updatePatient: async (req, res) => {
    try {
      const patient = await Patient.findById(req.params.id);
      if (!patient) {
        return res.status(404).json({ error: "Patient not found" });
      }
      const patientData = req.body;
      for (const field in patientData) {
        if (patientData.hasOwnProperty(field)) {
          if (Array.isArray(patientData[field])) {
            // Handle array fields
            if (patient[field]) {
              patient[field] = [...patient[field], ...patientData[field]];
            } else {
              patient[field] = patientData[field];
            }
          } else {
            // Handle non-array fields
            patient[field] = patientData[field] || patient[field];
          }
        }
      }
      const updatedPatient = await patient.save();
      res.json(updatedPatient);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  updateFieldValueAtIndex: async (req, res) => {
    try {
      const newData = req.body;
      const patient = await Patient.findById(req.params.id);
      if (!patient) {
        return res.status(404).json({ error: "Patient not found" });
      }
      if (
        patient[newData.fieldName] &&
        Array.isArray(patient[newData.fieldName]) &&
        newData.index >= 0 &&
        newData.index < patient[newData.fieldName].length
      ) {
        patient[newData.fieldName][newData.index] = newData.value;
      } else {
        return res.status(400).json({ error: "Invalid field name or index" });
      }
      const updatedPatient = await patient.save();
      res.json(updatedPatient);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  deletePatient: async (req, res) => {
    try {
      const patient = await Patient.findById(req.params.id);
      if (!patient) {
        return res.status(404).json({ error: "Patient not found" });
      }
      await Patient.findByIdAndDelete(req.params.id);
      res.json({ message: "Patient deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  deleteFieldValueAtIndex: async (req, res) => {
    try {
      const { fieldName, index } = req.body;
      const patient = await Patient.findById(req.params.id);
      if (!patient) {
        return res.status(404).json({ error: "Patient not found" });
      }
      if (
        patient[fieldName] &&
        Array.isArray(patient[fieldName]) &&
        index >= 0 &&
        index < patient[fieldName].length
      ) {
        patient[fieldName].splice(index, 1);
      } else {
        return res.status(400).json({ error: "Invalid field name or index" });
      }
      const updatedPatient = await patient.save();
      res.json(updatedPatient);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
};
module.exports = PatientController;
