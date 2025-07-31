// controllers/userController.js

const db = require('../db');

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const [rows] = await db.promise().query('SELECT id, username, email, created_at FROM users');
    res.status(200).json(rows);
  } catch (error) {
    console.error('❌ Error fetching users:', error);
    res.status(500).json({ message: 'Server error while fetching users' });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const hashedPassword = password; // You can integrate bcrypt later
    await db.promise().query(
      'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );
    res.status(201).json({ message: '✅ User created successfully' });
  } catch (error) {
    console.error('❌ Error creating user:', error);
    res.status(500).json({ message: 'Server error while creating user' });
  }
};
