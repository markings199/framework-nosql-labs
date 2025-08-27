const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// ✅ Persisted in-memory store (Week 3)
app.locals.store = { users: [] };

// Attach the same store to every request
app.use((req, res, next) => {
  req.store = req.app.locals.store;
  next();
});

// --- existing routes ---
const homeRoutes = require('./routes/homeRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const contactRoutes = require('./routes/contactRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/', homeRoutes);
app.use('/', aboutRoutes);
app.use('/', contactRoutes);
app.use('/api', userRoutes);

// 404 middleware (for unknown routes)
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Centralized error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
