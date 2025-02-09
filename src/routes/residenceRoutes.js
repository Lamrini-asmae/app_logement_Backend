import {getResidences,getResidenceById,createResidence,updateResidence,deleteResidence} from '../controllers/residenceController.js';
import express from 'express';
import { verifyJwt } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/Residence/', getResidences);
router.post('/Residence/',verifyJwt, createResidence);
router.put('/Residence/:id',verifyJwt, updateResidence);
router.delete('/Residence/:id',verifyJwt, deleteResidence);
router.get('/Residence/:id', getResidenceById);

export default router;
