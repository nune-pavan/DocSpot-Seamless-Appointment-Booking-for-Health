require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./utils/db");

const userRoutes = require("./routes/userRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const patientRoutes = require("./routes/patientRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();
const PORT = process.env.PORT || 9000;

// ✅ Optional Debug: Show DB_URI in CI logs (remove in production)
console.log("✅ DB_URI from environment:", process.env.DB_URI ? "loaded" : "missing");

// ✅ Connect to MongoDB using URI from secrets
connectDB(process.env.DB_URI);

// ✅ CORS setup (adjust origin for production if needed)
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};

// ✅ Middleware
app.use(cors(corsOptions));
app.use(express.json());

// ✅ Routes
app.use("/api/users", userRoutes);
app.use("/api/doctors", doctorRoutes);
app.use("/api/patients", patientRoutes);
app.use("/api/appointments", appointmentRoutes);

// ✅ Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
