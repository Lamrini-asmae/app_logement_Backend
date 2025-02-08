import express from 'express';
import dotenv from 'dotenv';

import connectDB from './src/config/db.js';
import userRoutes from './src/routes/userRoutes.js'
import residenceRoutes from './src/routes/residenceRoutes.js'
import reservationRoutes from './src/routes/reservationRoutes.js'
import apartmentRoutes from './src/routes/apartmentRoutes.js'
import authRoutes from './src/routes/authRoutes.js';

const router = express.Router();
dotenv.config(); 
const app = express();
const PORT = process.env.PORT || 5000;


//Middleware
app.use(express.json());
//connect db
connectDB();
app.use(userRoutes); 
app.use(residenceRoutes); 
app.use(apartmentRoutes); 
app.use(reservationRoutes); 
app.use('/auth', authRoutes);

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
})