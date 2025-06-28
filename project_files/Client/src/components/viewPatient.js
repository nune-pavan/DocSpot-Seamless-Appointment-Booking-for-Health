import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  Button,
} from "@mui/material";

const ViewPatient = () => {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [randomGender, setRandomGender] = useState("");
  const [randomAge, setRandomAge] = useState("");

  useEffect(() => {
    const fetchPatient = async () => {
      try {
        const res = await fetch(`http://localhost:9000/api/patients/${id}`);
        const data = await res.json();
        setPatient(data);

        // Random gender (only Male and Female)
        const genders = ["Male", "Female"];
        setRandomGender(genders[Math.floor(Math.random() * genders.length)]);

        // Random age between 18 and 77
        setRandomAge(Math.floor(Math.random() * 60) + 18);
      } catch (error) {
        console.error("Failed to fetch patient data", error);
      }
    };

    fetchPatient();
  }, [id]);

  if (!patient) return <p>Loading...</p>;

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper elevation={4} sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Patient Profile
        </Typography>
        <Box mt={2}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Name:</strong> {patient.name}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Email:</strong> {patient.email}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Gender:</strong> {randomGender}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">
                <strong>Age:</strong> {randomAge}
              </Typography>
            </Grid>
          </Grid>

          <Box mt={4} textAlign="center">
            <Button
              variant="contained"
              color="error"
              component={Link}
              to="/home"
              sx={{ textTransform: "none", fontWeight: "bold", px: 4, py: 1 }}
            >
              Return Home
            </Button>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default ViewPatient;
