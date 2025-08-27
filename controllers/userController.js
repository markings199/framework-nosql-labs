// Create User
exports.createUser = (req, res) => {
  const { id, name, email } = req.body || {};
  if (!id || !name || !email) {
    return res.status(400).json({ message: 'id, name, and email are required.' });
  }

  const exists = req.store.users.find(u => u.id === Number(id));
  if (exists) return res.status(409).json({ message: 'User id already exists.' });

  req.store.users.push({ id: Number(id), name, email });

  console.log('📌 Users now:', req.store.users);

  return res.status(201).json({ message: 'User created' });
};

// Get All Users
exports.getAllUsers = (req, res) => {
  return res.status(200).json(req.store.users);
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

  req.store.users.splice(index, 1);
  return res.status(200).json({ message: 'User deleted' });
};
