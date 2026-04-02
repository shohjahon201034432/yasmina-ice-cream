import bcrypt from 'bcryptjs';
import { db } from '../db/database.js';
import { signToken } from '../utils/jwt.js';

export function register(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: 'Password must be at least 6 characters' });
  }

  db.get('SELECT id FROM users WHERE email = ?', [email], async (err, existingUser) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    if (existingUser) return res.status(409).json({ message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);

    db.run(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, hashedPassword],
      function (insertErr) {
        if (insertErr) return res.status(500).json({ message: 'Could not create user' });

        const user = {
          id: this.lastID,
          name,
          email,
          token: signToken({ id: this.lastID, email })
        };

        res.status(201).json(user);
      }
    );
  });
}

export function login(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  db.get('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const matches = await bcrypt.compare(password, user.password);
    if (!matches) return res.status(401).json({ message: 'Invalid credentials' });

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      token: signToken({ id: user.id, email: user.email })
    });
  });
}

export function me(req, res) {
  db.get('SELECT id, name, email FROM users WHERE id = ?', [req.user.id], (err, user) => {
    if (err) return res.status(500).json({ message: 'Database error' });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  });
}
