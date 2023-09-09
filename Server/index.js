const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 9000;
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());

// Define a route for the root URL
app.get("/", (req, res) => {
  res.send("Hello, this is the root route!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
