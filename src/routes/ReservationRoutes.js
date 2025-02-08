import {getReservations,getReservationById,createReservation,updateReservation,deleteReservation} from '../controllers/reservationController.js';
import express from 'express';
import { verifyJwt } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/reserve', getReservations);
router.post('/reserve',verifyJwt, createReservation);
router.put('/reserve/:id', updateReservation);
router.delete('/reserve/:id', deleteReservation);
router.get('/reserve/:id', getReservationById);

export default router;



