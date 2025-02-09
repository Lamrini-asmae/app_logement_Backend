import {getReservations,getReservationById,createReservation,updateReservation,deleteReservation} from '../controllers/reservationController.js';
import express from 'express';
import { verifyJwt } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/reserve',verifyJwt, getReservations);
router.post('/reserve',verifyJwt, createReservation);
router.put('/reserve/:id',verifyJwt, updateReservation);
router.delete('/reserve/:id',verifyJwt, deleteReservation);
router.get('/reserve/:id', verifyJwt,getReservationById);

export default router;



