const express = require("express");
const router = express.Router();
const appointmentController = require("../controllers/appointmentController");

// Define routes for appointments
router.post("/", appointmentController.createAppointment);
router.get("/", appointmentController.getAllAppointments);
router.get("/:id", appointmentController.getAppointmentById);
router.put("/:id", appointmentController.updateAppointmentStatus);
router.delete("/:id", appointmentController.deleteAppointment);

module.exports = router;
