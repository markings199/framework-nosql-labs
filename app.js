require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes'); // ✅ new auth routes

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// ✅ Debug: check if .env is loaded
console.log("📡 Mongo URI:", process.env.MONGO_URI ? "Loaded ✅" : "Missing ❌");

// ✅ Connect to MongoDB Atlas with better logs
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => {
    console.error('❌ MongoDB connection error: ' + err.message);
  });

// ✅ Extra event listeners for debugging
mongoose.connection.on('connected', () => {
  console.log('📡 Mongoose connected to DB');
});

mongoose.connection.on('error', err => {
  console.error('⚠️ Mongoose runtime error: ' + err.message);
});

mongoose.connection.on('disconnected', () => {
  console.warn('⚠️ Mongoose disconnected');
});

// Routes
app.use('/api', userRoutes);        // existing user routes
app.use('/api/auth', authRoutes);   // signup/login routes

// Start server
app.listen(PORT, () => console.log(`🚀 Server running at http://localhost:${PORT}`));

module.exports = app;
