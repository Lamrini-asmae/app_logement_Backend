import bcrypt from 'bcryptjs';
import express from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';
import { body, validationResult } from 'express-validator';


//
function  generateAccessToken({ userId, role }){
  return jwt.sign(
    { userId: userId, role: role },
    process.env.JWT_SECRET,
    { expiresIn: '12h' }
  );
}
// Register route with validation
export const register = [
  // Validation rules
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters long')
    .matches(/\d/)
    .withMessage('Password must contain a number')
    .matches(/[A-Z]/)
    .withMessage('Password must contain an uppercase letter')
    .matches(/[\W_]/)
    .withMessage('Password must contain a special character'),

  // Handle registration
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { firstname, lastname, dateofbirth, gender, profession, email, password } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
      }

      // Hash password before saving
      const hashedPassword = await bcrypt.hash(password, 10);

      // Create new user with the provided data
      const newUser = new User({
        firstname,
        lastname,
        dateofbirth,
        gender,
        profession,
        email,
        password: hashedPassword
      });

      // Save the user to the database
      await newUser.save();

      res.status(201).json({ message: 'User registered successfully' });

    } catch (error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  }
];

// Login route with validation
export const login = [
  // Validation rules
  body('email').isEmail().withMessage('Please enter a valid email'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),

  // Handle login
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { email, password } = req.body;

      // Check if user exists
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Check if password is correct
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Generate JWT token
      const token =  generateAccessToken({ userId: user._id, role: user.role });
      // Generate a refresh JWT token
      const refreshToken = jwt.sign(
        { userId: user._id },
        process.env.REFRESH_SECRET,
        { expiresIn: '7d' } 
      );
      //save in cookie
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true, 
        secure: true, // Utiliser "false" en dev si pas en HTTPS
        sameSite: "Strict",
      });
      res.json({ token,refreshToken});

    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }
  
];

export const RefreshToken=[
  async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.status(403).json({ message: "No refresh token" });
  
    jwt.verify(refreshToken, process.env.REFRESH_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: "Invalid refresh token" });
  
      const newAccessToken = generateAccessToken({ id: user.id });
      res.json({ accessToken: newAccessToken });
    });
  }
];


// app.post('/logout', (req, res) => {
//   res.clearCookie('refresh_token');
//   res.status(200).send('Logged out successfully');
// });