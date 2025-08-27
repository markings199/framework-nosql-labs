// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const c = require('../controllers/userController');

// CRUD routes
router.post('/users', c.createUser);     // Create
router.get('/users', c.getUsers);        // Read all
router.get('/users/:id', c.getUserById); // Read one
router.put('/users/:id', c.updateUser);  // Update
router.delete('/users/:id', c.deleteUser); // Delete

module.exports = router;
