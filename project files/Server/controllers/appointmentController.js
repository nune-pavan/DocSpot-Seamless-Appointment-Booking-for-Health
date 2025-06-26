const Appointment = require("../models/Appointment");

const appointmentController = {
  createAppointment: async (req, res) => {
    try {
      const appointmentData = req.body;

      // Check if required fields are present
      if (
        !appointmentData ||
        !appointmentData.patient ||
        !appointmentData.doctor ||
        !appointmentData.date
      ) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      const appointment = new Appointment(appointmentData);
      await appointment.save();
      res.json(appointment);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  getAllAppointments: async (req, res) => {
    try {
      const appointments = await Appointment.find();
      if (!appointments) {
        return res.status(404).json({ error: "No appointments found" });
      }
      res.json(appointments);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  getAppointmentById: async (req, res) => {
    try {
      const appointmentId = req.params.id;
      if (!appointmentId) {
        return res.status(400).json({ error: "Invalid appointment ID" });
      }

      const appointment = await Appointment.findById(appointmentId);
      if (!appointment) {
        return res.status(404).json({ error: "Appointment not found" });
      }

      res.json(appointment);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  updateAppointmentStatus: async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const appointment = await Appointment.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );

      if (!appointment) {
        return res.status(404).json({ error: "Appointment not found" });
      }

      res.json(appointment);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
  deleteAppointment: async (req, res) => {
    try {
      const appointmentId = req.params.id;
      if (!appointmentId) {
        return res.status(400).json({ error: "Invalid appointment ID" });
      }

      const appointment = await Appointment.findById(appointmentId);
      if (!appointment) {
        return res.status(404).json({ error: "Appointment not found" });
      }

      await Appointment.findByIdAndDelete(appointmentId);
      res.json({ message: "Appointment deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  },
};

module.exports = appointmentController;
