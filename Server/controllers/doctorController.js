const Doctor = require("../models/Doctor");

const DoctorController = {
  getAllDoctors: async (req, res) => {
    try {
      const doctors = await Doctor.find();
      if (doctors.length === 0) {
        return res.status(404).json({ error: "No doctors found" });
      }
      res.json(doctors);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  getDoctorById: async (req, res) => {
    try {
      const doctor = await Doctor.findById(req.params.id);
      if (!doctor) {
        return res.status(404).json({ error: "Doctor not found" });
      }
      res.json(doctor);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  createDoctor: async (req, res) => {
    try {
      const doctorData = req.body;
      const existingDoctor = await Doctor.findOne({ email: doctorData.email });
      if (existingDoctor) {
        return res.status(400).json({ error: "Doctor already exists" });
      }
      const doctor = new Doctor({
        ...doctorData,
      });
      await doctor.save();
      res.json(doctor);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  updateDoctor: async (req, res) => {
    try {
      const doctor = await Doctor.findById(req.params.id);
      if (!doctor) {
        return res.status(404).json({ error: "Doctor not found" });
      }

      const doctorData = req.body;
      for (const field in doctorData) {
        if (doctorData.hasOwnProperty(field)) {
          if (Array.isArray(doctorData[field])) {
            // Handle array fields
            if (doctor[field]) {
              doctor[field] = [...doctor[field], ...doctorData[field]];
            } else {
              doctor[field] = doctorData[field];
            }
          } else {
            // Handle non-array fields
            doctor[field] = doctorData[field] || doctor[field];
          }
        }
      }

      const updatedDoctor = await doctor.save();
      res.json(updatedDoctor);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  updateFieldValueAtIndex: async (req, res) => {
    try {
      const newData = req.body;
      const doctor = await Doctor.findById(req.params.id);
      if (!doctor) {
        return res.status(404).json({ error: "Doctor not found" });
      }
      if (
        doctor[newData.fieldName] &&
        Array.isArray(doctor[newData.fieldName]) &&
        newData.index >= 0 &&
        newData.index < doctor[newData.fieldName].length
      ) {
        doctor[newData.fieldName][newData.index] = newData.value;
      } else {
        return res.status(400).json({ error: "Invalid field name or index" });
      }
      const updatedDoctor = await doctor.save();
      res.json(updatedDoctor);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  deleteDoctor: async (req, res) => {
    try {
      const doctor = await Doctor.findById(req.params.id);

      if (!doctor) {
        return res.status(404).json({ error: "Doctor not found" });
      }
      await Doctor.deleteOne();
      res.json({ message: "Doctor deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  deleteFieldValueAtIndex: async (req, res) => {
    try {
      const { fieldName, index } = req.body;
      const doctor = await Doctor.findById(req.params.id);

      if (!doctor) {
        return res.status(404).json({ error: "Doctor not found" });
      }

      if (
        doctor[fieldName] &&
        Array.isArray(doctor[fieldName]) &&
        index >= 0 &&
        index < doctor[fieldName].length
      ) {
        doctor[fieldName].splice(index, 1);
      } else {
        return res.status(400).json({ error: "Invalid field name or index" });
      }

      const updatedDoctor = await doctor.save();
      res.json(updatedDoctor);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
};

module.exports = DoctorController;
