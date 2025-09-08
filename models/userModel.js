const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },               // User's name
  email: { type: String, required: true, unique: true },// Unique email
  age: { type: Number, min: 0 },                        // Optional age, must be >= 0
  password: { type: String, required: true }            // Hashed password for login
});

const User = mongoose.model("User", userSchema);
module.exports = User;
