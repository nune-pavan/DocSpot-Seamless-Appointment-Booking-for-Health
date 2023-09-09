const express = require("express");
const router = express.Router();
const doctorController = require("../controllers/doctorController");

// Define routes for doctors
router.get("/", doctorController.getAllDoctors);
router.get("/:id", doctorController.getDoctorById);
router.post("/", doctorController.createDoctor);
router.put("/:id", doctorController.updateDoctor);
router.put("/:id/updateAtIndex", doctorController.updateFieldValueAtIndex);
router.delete("/:id", doctorController.deleteDoctor);
router.delete("/:id/deleteAtIndex", doctorController.deleteFieldValueAtIndex);

module.exports = router;
