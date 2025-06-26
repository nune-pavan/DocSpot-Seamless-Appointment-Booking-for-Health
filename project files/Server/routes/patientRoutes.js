const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");

// @route   GET /api/patients/:id
// @desc    Get a patient by ID
// @access  Public (or protect with auth if needed)
router.get("/:id", async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);

    if (!patient) {
      return res.status(404).json({ message: "Patient not found" });
    }

    res.status(200).json(patient);
  } catch (error) {
    console.error("Error fetching patient:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
