const User = require('../models/userModel');
const mongoose = require('mongoose');

// CREATE a new user
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ message: 'User created', user });
  } catch (err) {
    // Handle duplicate email
    if (err.code === 11000) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    res.status(400).json({ message: err.message });
  }
};

// READ ALL users (with optional name filter)
exports.getAllUsers = async (req, res) => {
  try {
    const { name } = req.query;
    let query = {};
    if (name) query.name = { $regex: name, $options: 'i' };
    const users = await User.find(query);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// READ ONE user by ID
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) return res.status(400).json({ message: 'Invalid ID format' });

    const user = await User.findById(id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE user by ID
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) return res.status(400).json({ message: 'Invalid ID format' });

    const user = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true
    });

    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({ message: 'User updated', user });
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ message: 'Email already exists' });
    }
    res.status(400).json({ message: err.message });
  }
};

// DELETE user by ID
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) return res.status(400).json({ message: 'Invalid ID format' });

    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ message: 'User deleted', user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
