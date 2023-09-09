const express = require('express');
const router = express.Router();
const clinicController = require('../controllers/clinicController');

// Define routes
router.get('/', clinicController.getAllClinics);
router.get('/:id', clinicController.getAllClinicsById);
router.post("/", clinicController.createClinic);
router.put("/:id", clinicController.updateClinic);
router.put("/:id/updateAtIndex", clinicController.updateFieldValueAtIndex);
router.delete("/:id", clinicController.deleteClinic);
router.delete("/:id/deleteAtIndex", clinicController.deleteFieldValueAtIndex);

module.exports = router;
