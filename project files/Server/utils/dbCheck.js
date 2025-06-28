const mongoose = require("mongoose");
require("dotenv").config();

const dbURI = process.env.DB_URI;

(async () => {
  try {
    console.log("✅ Checking MongoDB connection...");
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");
    await mongoose.connection.close();
    process.exit(0);
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
})();
