const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDB = require("./utils/db");
const doctorRoutes = require("./routes/doctorRoutes");

const app = express();
const PORT = process.env.PORT || 9000;

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// Use doctor routes
app.use("/api/doctors", doctorRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
