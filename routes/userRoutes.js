const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/users', userController.createUser);       // Create user
router.get('/users', userController.getAllUsers);       // Get all users
router.get('/users/:id', userController.getUserById);   // Get single user
router.put('/users/:id', userController.updateUser);    // Update user
router.delete('/users/:id', userController.deleteUser); // Delete user

module.exports = router;
