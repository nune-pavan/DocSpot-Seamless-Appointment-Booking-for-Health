const express = require("express");
const router = express.Router();
const patientController = require("../controllers/patientController");

// Define routes
router.get("/", patientController.getAllPatients);
router.get("/:id", patientController.getPatientById);
router.post("/", patientController.createPatient);
router.put("/:id", patientController.updatePatient);
router.put("/:id/updateAtIndex", patientController.updateFieldValueAtIndex);
router.delete("/:id", patientController.deletePatient);
router.delete("/:id/deleteAtIndex", patientController.deleteFieldValueAtIndex);

module.exports = router;
