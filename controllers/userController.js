<<<<<<< HEAD
// controllers/userController.js

// Create User
exports.createUser = (req, res) => {
  const { id, name, email } = req.body || {};     // Extract fields from request body
  if (!id || !name || !email) {                   // Validation
    return res.status(400).json({ message: 'id, name, and email are required.' });
  }

  // Prevent duplicate IDs
  const exists = req.store.users.find(u => u.id === Number(id));
  if (exists) return res.status(409).json({ message: 'User id already exists.' });

  // Add new user to the in-memory store
  req.store.users.push({ id: Number(id), name, email });

  // Respond with 201 (Created)
  return res.status(201).json({ message: 'User created' });
};

// Get All Users
exports.getUsers = (req, res) => {
  return res.status(200).json(req.store.users);   // Return all users
};

// Get User by ID
exports.getUserById = (req, res) => {
  const id = Number(req.params.id);                     // Get ID from URL
  const user = req.store.users.find(u => u.id === id);  // Look up user
  if (!user) return res.status(404).json({ message: 'User not found' });
  return res.status(200).json(user);                    // Return found user
};

// Update User
exports.updateUser = (req, res) => {
  const id = Number(req.params.id);               // Get ID from URL params
  const idx = req.store.users.findIndex(u => u.id === id);  // Find user index
  if (idx === -1) return res.status(404).json({ message: 'User not found' });

  // Only update fields provided in request body
  const { name, email } = req.body || {};
  req.store.users[idx] = {
    ...req.store.users[idx],                      // Keep old values
    ...(name && { name }),                        // Replace if new name given
    ...(email && { email })                       // Replace if new email given
  };

  return res.status(200).json({ message: 'User updated', user: req.store.users[idx] });
};

// Delete User
exports.deleteUser = (req, res) => {
  const id = Number(req.params.id);               // Extract ID
  const idx = req.store.users.findIndex(u => u.id === id);
  if (idx === -1) return res.status(404).json({ message: 'User not found' });

  // Remove user from array
  const [deleted] = req.store.users.splice(idx, 1);

  return res.status(200).json({ message: 'User deleted', user: deleted });
};
=======
// controllers/userController.js

// Create User
exports.createUser = (req, res) => {
  const { id, name, email } = req.body || {};
  if (!id || !name || !email) {
    return res.status(400).json({ message: 'id, name, and email are required.' });
  }

  const exists = req.store.users.find(u => u.id === Number(id));
  if (exists) return res.status(409).json({ message: 'User id already exists.' });

  const newUser = { id: Number(id), name, email };
  req.store.users.push(newUser);

  console.log('📌 Users now:', req.store.users);

  // 🔹 Add Location header for newly created user
  res.setHeader('Location', `/api/users/${id}`);

  return res.status(201).json({ message: 'User created', user: newUser });
};

// Get All Users (with optional query filtering)
exports.getAllUsers = (req, res) => {
  const { name } = req.query; // Example: /api/users?name=ali
  let users = req.store.users;

  if (name) {
    const search = name.toLowerCase();
    users = users.filter(u => u.name.toLowerCase().includes(search));
  }

  return res.status(200).json(users);
};

// Get User by ID
exports.getUserById = (req, res) => {
  const id = Number(req.params.id);
  const user = req.store.users.find(u => u.id === id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  return res.status(200).json(user);
};

// Update User
exports.updateUser = (req, res) => {
  const id = Number(req.params.id);
  const user = req.store.users.find(u => u.id === id);
  if (!user) return res.status(404).json({ message: 'User not found' });

  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;

  return res.status(200).json({ message: 'User updated', user });
};

// Delete User
exports.deleteUser = (req, res) => {
  const id = Number(req.params.id);
  const index = req.store.users.findIndex(u => u.id === id);
  if (index === -1) return res.status(404).json({ message: 'User not found' });

  const [deleted] = req.store.users.splice(index, 1);
  return res.status(200).json({ message: 'User deleted', user: deleted });
};
>>>>>>> week3-split
