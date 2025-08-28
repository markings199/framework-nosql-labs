// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// CRUD routes
router.post("/users", userController.createUser);       // POST   /api/users     → create user
router.get("/users", userController.getAllUsers);       // GET    /api/users     → get all users (with optional ?name= filter)
router.get("/users/:id", userController.getUserById);   // GET    /api/users/:id → get single user
router.put("/users/:id", userController.updateUser);    // PUT    /api/users/:id → update user
router.delete("/users/:id", userController.deleteUser); // DELETE /api/users/:id → delete user

module.exports = router;
