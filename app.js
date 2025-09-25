require("dotenv").config(); // Load environment variables
const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes"); // ✅ User routes (protected)
const authRoutes = require("./routes/authRoutes"); // ✅ Auth routes (signup, login)

// ✅ Import the NEW Week 7 routes
const productRoutes = require("./routes/productRoutes");
const adminRoutes = require("./routes/adminRoutes");
const statsRoutes = require("./routes/statsRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// ✅ Debug: check if .env is loaded (update to check MONGODB_URI)
console.log("📡 Mongo URI:", process.env.MONGODB_URI ? "Loaded ✅" : "Missing ❌");
console.log("🔑 JWT Secret:", process.env.JWT_SECRET ? "Loaded ✅" : "Missing ❌");

// ✅ Connect to MongoDB Atlas (use MONGODB_URI as specified in requirements)
mongoose
  .connect(process.env.MONGODB_URI || process.env.MONGO_URI) // Fallback for backward compatibility
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

// ✅ MOUNT THE NEW WEEK 7 ROUTES
app.use("/api", productRoutes);   // Product routes (public catalog + seller CRUD)
app.use("/api", adminRoutes);     // Admin routes (user list, product stats)
app.use("/api", statsRoutes);     // Stats routes (signups, top spenders, hobbies)

// Start server
app.listen(PORT, () =>
  console.log(`🚀 Server running at http://localhost:${PORT}`)
);

module.exports = app;