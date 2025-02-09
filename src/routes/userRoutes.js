import {getUsers,getUserById,createUser,updateUser,deleteUser} from '../controllers/userController.js';
import express from 'express';
import { verifyJwt } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/user/',verifyJwt, getUsers);
router.post('/user/',verifyJwt,  createUser);
router.put('/user/:id',verifyJwt,  updateUser);
router.delete('/user/:id',verifyJwt,  deleteUser);
router.get('/user/:id',verifyJwt, getUserById);

export default router;
