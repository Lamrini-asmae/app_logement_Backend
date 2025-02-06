import {getResidences,getResidenceById,createResidence,updateResidence,deleteResidence} from '../controllers/residenceController.js';
import express from 'express';

const router = express.Router();

router.get('/Residence/', getResidences);
router.post('/Residence/', createResidence);
router.put('/Residence/:id', updateResidence);
router.delete('/Residence/:id', deleteResidence);
router.get('/Residence/:id', getResidenceById);

export default router;
