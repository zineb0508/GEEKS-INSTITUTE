const { createUserWithPassword } = require('../models/hashModel');
const bcrypt = require('bcrypt');

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
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
};

