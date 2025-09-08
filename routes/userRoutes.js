const express = require("express"); // Import Express
const router = express.Router(); // Create a new router object
const c = require("../controllers/userController"); // Import controller functions
const auth = require("../middleware/authMiddleware"); // Import JWT middleware

// Protected CRUD routes (require JWT)
router.post("/users", auth, c.createUser); // POST /api/users
router.get("/users", auth, c.getUsers); // GET  /api/users
router.get("/users/:id", auth, c.getUserById); // GET  /api/users/:id
router.put("/users/:id", auth, c.updateUser); // PUT  /api/users/:id
router.delete("/users/:id", auth, c.deleteUser); // DELETE /api/users/:id

module.exports = router; // Export router so app.js can use it