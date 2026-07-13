const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

// In-memory user storage (replace with database in production)
const users = new Map();

// Initialize with a demo user
users.set('demo', {
  username: 'demo',
  passwordHash: bcrypt.hashSync('password123', 10)
});

// Register endpoint
app.post('/api/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validation
    if (!username || !password) {
      return res.status(400).json({ message: '用户名和密码不能为空' });
    }

    if (!/^[a-zA-Z]+$/.test(username)) {
      return res.status(400).json({ message: '用户名只能包含英文字母' });
    }

    if (username.length > 16) {
      return res.status(400).json({ message: '用户名最多16位' });
    }

    if (password.length < 8) {
      return res.status(400).json({ message: '密码至少8位' });
    }

    // Check if user exists
    if (users.has(username)) {
      return res.status(409).json({ message: '用户名已存在' });
    }

    // Hash password and store user
    const passwordHash = bcrypt.hashSync(password, 10);
    users.set(username, { username, passwordHash });

    res.status(201).json({ 
      message: '注册成功',
      username 
    });
  } catch (error) {
    console.error('注册错误:', error);
    res.status(500).json({ message: '服务器错误' });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validation
    if (!username || !password) {
      return res.status(400).json({ message: '用户名和密码不能为空' });
    }

    // Find user
    const user = users.get(username);
    if (!user) {
      return res.status(401).json({ message: '用户名或密码错误' });
    }

    // Verify password
    const passwordMatch = bcrypt.compareSync(password, user.passwordHash);
    if (!passwordMatch) {
      return res.status(401).json({ message: '用户名或密码错误' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { username },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({ 
      message: '登录成功',
      token,
      username 
    });
  } catch (error) {
    console.error('登录错误:', error);
    res.status(500).json({ message: '服务器错误' });
  }
});

// Verify token endpoint
app.get('/api/verify', (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({ message: '无效的token' });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    res.json({ 
      message: 'token有效',
      username: decoded.username 
    });
  } catch (error) {
    res.status(401).json({ message: '无效的token' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Demo user: username=demo, password=password123`);
});
