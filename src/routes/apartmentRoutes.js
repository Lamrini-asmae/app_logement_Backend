import {getApatments,getApatmentById,createApatment,updateApatment,deleteApatment} from '../controllers/apartmentController.js';
import express from 'express';

const router = express.Router();

router.get('/Apatment', getApatments);
router.post('/Apatment', createApatment);
router.put('/Apatment/:id', updateApatment);
router.delete('/Apatment/:id', deleteApatment);
router.get('/Apatment/:id', getApatmentById);

export default router;
