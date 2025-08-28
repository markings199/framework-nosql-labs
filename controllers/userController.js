// controllers/userController.js

// Create User
exports.createUser = (req, res) => {
  const { name, email } = req.body || {};
  if (!name || !email) {
    return res.status(400).json({ message: 'name and email are required.' });
  }

  // Auto-generate ID
  const newId = req.store.users.length > 0
    ? Math.max(...req.store.users.map(u => u.id)) + 1
    : 1;

  const newUser = { id: newId, name, email };
  req.store.users.push(newUser);

  console.log('📌 Users now:', req.store.users);

  // Add Location header for newly created user
  res.setHeader('Location', `/api/users/${newId}`);

  return res.status(201).json({ message: 'User created', user: newUser });
};

// Get All Users (with optional query filtering by name)
exports.getAllUsers = (req, res) => {
  const { name } = req.query;
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

  const { name, email } = req.body || {};
  if (name) user.name = name;
  if (email) user.email = email;

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
