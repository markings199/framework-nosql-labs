// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// ✅ Middleware: parse JSON
app.use(express.json());

// ✅ In-memory store (Week 3, Day 1)
// Using app.locals so it persists for all requests
app.locals.store = { users: [] };

// Attach store to every request
app.use((req, res, next) => {
  req.store = req.app.locals.store;
  next();
});

// --- Existing routes ---
const homeRoutes = require('./routes/homeRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const contactRoutes = require('./routes/contactRoutes');

// --- New User routes (Week 3, Day 1) ---
const userRoutes = require('./routes/userRoutes');

// ✅ Mount routes
app.use('/', homeRoutes);
app.use('/', aboutRoutes);
app.use('/', contactRoutes);
app.use('/api', userRoutes);   // <-- Users API mounted under /api

// 404 middleware (for unknown routes)
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Centralized error handler
app.use((err, req, res, next) => {
  console.error('❌ Unexpected error:', err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
