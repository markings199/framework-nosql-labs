// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// CRUD routes
router.post("/users", userController.createUser);       // POST /api/users → create
router.get("/users", userController.getAllUsers);       // GET /api/users (with ?name= filter)
router.get("/users/:id", userController.getUserById);   // GET /api/users/:id → read one
router.put("/users/:id", userController.updateUser);    // PUT /api/users/:id → update
router.delete("/users/:id", userController.deleteUser); // DELETE /api/users/:id → delete

module.exports = router;
