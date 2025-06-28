const mongoose = require("mongoose");

const connectDB = async (dbURI) => {
  try {
    if (!dbURI) {
      throw new Error("❌ DB_URI is undefined. Make sure it's set correctly.");
    }

    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
