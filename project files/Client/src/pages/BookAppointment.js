import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Container,
  Paper,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const BookAppointment = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [condition, setCondition] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await fetch(`http://localhost:9000/api/doctors/${id}`);
        const data = await response.json();

        // 🔁 Convert Decimal128 to string and set default fee if missing
        if (data.fees && data.fees.$numberDecimal) {
          data.fees = parseFloat(data.fees.$numberDecimal);
        }

        // 🛠 Set default consultation fee to ₹500 if 0 or undefined
        if (!data.fees || data.fees === 0) {
          data.fees = 500;
        }

        setDoctor(data);
      } catch (err) {
        console.error("Error fetching doctor:", err);
      }
    };

    fetchDoctor();
  }, [id]);

  const handleBook = () => {
    // In real app, send this to backend (doctorId, patientId, condition)
    setBookingConfirmed(true);
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
        {doctor ? (
          <>
            <Typography variant="h4" gutterBottom>
              Book Appointment with {doctor.name}
            </Typography>
            <Divider sx={{ my: 2 }} />

            <Typography variant="body1" gutterBottom>
              <strong>Email:</strong> {doctor.email}
            </Typography>

            <Typography variant="body1" gutterBottom>
              <strong>Specialization:</strong> {doctor.specialization || "General"}
            </Typography>

            <Typography variant="body1" gutterBottom>
              <strong>Consultation Fees:</strong> ₹{doctor.fees}
            </Typography>

            <TextField
              label="Describe your medical condition"
              multiline
              rows={4}
              fullWidth
              margin="normal"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            />

            <BookButton fullWidth onClick={handleBook}>
              Book Appointment
            </BookButton>

            {bookingConfirmed && (
              <Typography
                variant="h6"
                sx={{ mt: 3, color: "green", textAlign: "center" }}
              >
                ✅ Appointment Booked Successfully!
              </Typography>
            )}
          </>
        ) : (
          <Typography>Loading doctor details...</Typography>
        )}
      </Paper>
    </Container>
  );
};

const BookButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: "#D90429",
  color: "white",
  "&:hover": {
    backgroundColor: "#B20320",
  },
  padding: "12px",
  fontSize: "1rem",
  fontWeight: "bold",
  textTransform: "none",
}));

export default BookAppointment;
