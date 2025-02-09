import express from 'express';
import userRoutes from './userRoutes.js'
import residenceRoutes from './residenceRoutes.js'
import reservationRoutes from './reservationRoutes.js'
import apartmentRoutes from './apartmentRoutes.js'
import authRoutes from './authRoutes.js';

const router = express.Router();

router.use(userRoutes); 
router.use(residenceRoutes); 
router.use(apartmentRoutes); 
router.use(reservationRoutes); 
router.use('/auth', authRoutes);


export default router;

