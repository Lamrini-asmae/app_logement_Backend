import {getUsers,getUserById,createUser,updateUser,deleteUser} from '../controllers/userController.js';
import express from 'express';

const router = express.Router();

router.get('/user/', getUsers);
router.post('/user/', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
router.get('/user/:id', getUserById);

export default router;
