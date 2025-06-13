const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');
const hashModel = require('../models/hashModel');

const register = async (req, res) => {
  const { email, username, first_name, last_name, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await createUserWithPassword(
      { email, username, first_name, last_name },
      hashedPassword
    );
    res.status(201).json(newUser);
  } catch (err) {
    console.error('Register error:', err.message, err.stack);
    res.status(500).json({ error: 'Internal server error', details: err.message });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await userModel.getUserByUsername(username);
    if (!user) return res.status(404).json({ error: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    res.json({ message: 'Login successful' });
  } catch (err) {
    res.status(500).json({ error: 'Login failed' });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch users' });
  }
};

const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await userModel.getUserById(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch user' });
  }
};

const updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    await userModel.updateUser(id, req.body);
    res.json({ message: 'User updated successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Update failed' });
  }
};

module.exports = {
  register,
  login,
  getUsers,
  getUserById,
  updateUser,
};
