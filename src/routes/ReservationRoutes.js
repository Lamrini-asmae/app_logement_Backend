import {getReservations,getReservationById,createReservation,updateReservation,deleteReservation} from '../controllers/reservationController.js';
import express from 'express';

const router = express.Router();

router.get('/Reservation', getReservations);
router.post('/Reservation', createReservation);
router.put('/Reservation/:id', updateReservation);
router.delete('/Reservation/:id', deleteReservation);
router.get('/Reservation/:id', getReservationById);

export default router;
