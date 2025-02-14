import express from 'express';
import { register, login ,RefreshToken} from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/refresh', RefreshToken);
// router.post('/logout', logout);


export default router;
