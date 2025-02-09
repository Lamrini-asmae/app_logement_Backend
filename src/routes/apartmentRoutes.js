import {getApatments,getApatmentById,createApatment,updateApatment,deleteApatment} from '../controllers/apartmentController.js';
import express from 'express';
import { verifyJwt } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/Apatment', getApatments);
router.post('/Apatment',verifyJwt, createApatment);
router.put('/Apatment/:id',verifyJwt, updateApatment);
router.delete('/Apatment/:id',verifyJwt, deleteApatment);
router.get('/Apatment/:id', getApatmentById);

export default router;
