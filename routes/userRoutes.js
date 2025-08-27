// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const c = require('../controllers/userController');

// CRUD routes mapping
router.post('/users', c.createUser);     // POST /api/users → create user
router.get('/users', c.getUsers);        // GET  /api/users → get all users
router.get('/users/:id', c.getUserById); // GET  /api/users/:id → get single user

module.exports = router;
