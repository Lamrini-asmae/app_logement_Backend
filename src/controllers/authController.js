import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user.js';


export const register = async (req, res) => {
  try {
    const { firstname, lastname, age, gender, profession, email, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user with all required fields
    const newUser = new User({
      firstname,
      lastname,
      age,
      gender,
      profession,
      email,
      password: hashedPassword
    });

    // Save user to database
    await newUser.save();
    
    res.status(201).json({ message: 'User registered successfully' });

  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};


export const login = async (req, res) => {
  console.log("********");
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Generate JWT
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '12h' }
    );

    res.json({ token });

  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
