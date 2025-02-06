import {getResidences,getResidenceById,createResidence,updateResidence,deleteResidence} from '../controllers/residenceController.js';
import express from 'express';

const router = express.Router();

router.get('/residence/', getResidences);
router.post('/residence/', createResidence);
router.put('/residence/:id', updateResidence);
router.delete('/residence/:id', deleteResidence);
router.get('/residence/:id', getResidenceById);

export default router;
