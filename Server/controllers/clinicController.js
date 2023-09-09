const Clinic = require("../models/clinic");

const ClinicController = {
  getAllClinics: async (req, res) => {
    try {
      const clinics = await Clinic.find();
      res.json(clinics);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  getAllClinicsById: async (req, res) => {
    try {
      const clinic = await Clinic.findById(req.params.id);
      res.json(clinic);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  createClinic: async (req, res) => {
    try {
      const clinicData = req.body;
      const existingClinic = await Clinic.findOne({ email: clinicData.email });
      if (existingClinic) {
        return res.status(400).json({ error: "Clinic already exists" });
      }
      const clinic = new Clinic({
        ...clinicData,
      });
      await clinic.save();
      res.json(clinic);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  updateClinic: async (req, res) => {
    try {
      const clinic = await Clinic.findById(req.params.id);
      if (!clinic) {
        return res.status(404).json({ error: "Clinic not found" });
      }

      const clinicData = req.body;
      for (const field in clinicData) {
        if (clinicData.hasOwnProperty(field)) {
          if (Array.isArray(clinicData[field])) {
            // Handle array fields
            if (clinic[field]) {
              clinic[field] = [...clinic[field], ...clinicData[field]];
            } else {
              clinic[field] = clinicData[field];
            }
          } else {
            // Handle non-array fields
            clinic[field] = clinicData[field] || clinic[field];
          }
        }
      }

      const updatedClinic = await clinic.save();
      res.json(updatedClinic);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  updateFieldValueAtIndex: async (req, res) => {
    try {
      const newData = req.body;
      const clinic = await Clinic.findById(req.params.id);
      if (!clinic) {
        return res.status(404).json({ error: "Clinic not found" });
      }
      if (
        clinic[newData.fieldName] &&
        Array.isArray(clinic[newData.fieldName]) &&
        newData.index >= 0 &&
        newData.index < clinic[newData.fieldName].length
      ) {
        clinic[newData.fieldName][newData.index] = newData.value;
      } else {
        return res.status(400).json({ error: "Invalid field name or index" });
      }
      const updatedClinic = await clinic.save();
      res.json(updatedClinic);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  deleteClinic: async (req, res) => {
    try {
      await Clinic.findByIdAndDelete(req.params.id);
      res.json({ message: "Clinic deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  deleteFieldValueAtIndex: async (req, res) => {
    try {
      const { fieldName, index } = req.body;
      const clinic = await Clinic.findById(req.params.id);

      if (!clinic) {
        return res.status(404).json({ error: "Clinic not found" });
      }

      if (
        clinic[fieldName] &&
        Array.isArray(clinic[fieldName]) &&
        index >= 0 &&
        index < clinic[fieldName].length
      ) {
        clinic[fieldName].splice(index, 1);
      } else {
        return res.status(400).json({ error: "Invalid field name or index" });
      }

      const updatedClinic = await clinic.save();
      res.json(updatedClinic);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
};

module.exports = ClinicController;
