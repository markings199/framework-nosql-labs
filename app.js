require("dotenv").config(); // Load environment variables
const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes"); // ✅ User routes (protected)
const authRoutes = require("./routes/authRoutes"); // ✅ Auth routes (signup, login)

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// ✅ Debug: check if .env is loaded
console.log("📡 Mongo URI:", process.env.MONGO_URI ? "Loaded ✅" : "Missing ❌");

// ✅ Connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err.message));

// ✅ Extra logs for connection events
mongoose.connection.on("connected", () => {
  console.log("📡 Mongoose connected to DB");
});
mongoose.connection.on("error", (err) => {
  console.error("⚠️ Mongoose runtime error:", err.message);
});
mongoose.connection.on("disconnected", () => {
  console.warn("⚠️ Mongoose disconnected");
});

// Routes
app.use("/api/auth", authRoutes); // Public routes (signup, login)
app.use("/api", userRoutes);      // Protected user routes

// Start server
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);

module.exports = app;
