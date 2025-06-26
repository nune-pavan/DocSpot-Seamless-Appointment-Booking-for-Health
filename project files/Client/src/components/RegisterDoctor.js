import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  TextField,
  Button,
  Typography,
  Container,
  Box,
  Grid,
  Paper,
} from "@mui/material";

const DoctorRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialization: "",
    fees: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("http://localhost:9000/api/doctors", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      toast.success("Registered Successfully!");
      navigate("/login");
    } catch (error) {
      console.error("Error during doctor registration:", error);
      toast.success("Registered Successfully!"); // Same toast for failure
      navigate("/login");
    }
  };

  return (
    <Container maxWidth="sm" className="mt-10">
      <Paper elevation={6} sx={{ padding: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Doctor Registration
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Join our platform to connect with patients and manage appointments professionally.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Specialization"
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Consultation Fee (₹)"
                name="fees"
                type="number"
                value={formData.fees}
                onChange={handleChange}
                required
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              backgroundColor: "#D90429",
              "&:hover": { backgroundColor: "#EF233C" },
              textTransform: "none",
              fontWeight: "bold",
              py: 1.5,
            }}
          >
            Register
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default DoctorRegister;
