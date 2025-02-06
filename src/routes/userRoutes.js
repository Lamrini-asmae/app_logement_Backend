import {getUsers,getUserById,createUser,updateUser,deleteUser} from '../controllers/userController.js';
import express from 'express';

const router = express.Router();

router.get('/User/', getUsers);
router.post('/User/', createUser);
router.put('/User/:id', updateUser);
router.delete('/User/:id', deleteUser);
router.get('/User/:id', getUserById);

export default router;
