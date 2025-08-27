// Create User
exports.createUser = (req, res) => {
  const { id, name, email } = req.body || {};
  if (!id || !name || !email) {
    return res.status(400).json({ message: 'id, name, and email are required.' });
  }

  const exists = req.store.users.find(u => u.id === Number(id));
  if (exists) return res.status(409).json({ message: 'User id already exists.' });

  req.store.users.push({ id: Number(id), name, email });

  // 🔍 Debug log to check if the user was really added
  console.log('📌 Users now:', req.store.users);

  return res.status(201).json({ message: 'User created' });
};
