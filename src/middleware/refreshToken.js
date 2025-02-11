import jwt from 'jsonwebtoken';
import User from '../models/user.js';

export const refreshToken = async (req, res) => {
  const { refreshToken } = req.body; // Extract the refresh token from the request body
  
  if (!refreshToken) {
    return res.status(403).json({ message: 'Refresh token is required' });
  }

  try {
    // Verify the refresh token
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);

    // Find the user by the decoded user ID
    const user = await User.findById(decoded.userId);
    if (!user || user.refreshToken !== refreshToken) {
      return res.status(403).json({ message: 'Invalid refresh token' });
    }

    // Generate a new access token
    const newAccessToken = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '15m' }  // Short-lived access token
    );

    res.json({ accessToken: newAccessToken });

  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired refresh token' });
  }
};
