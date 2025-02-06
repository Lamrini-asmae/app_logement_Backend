import express from 'express';
import connectDB from './src/config/db.js';
import user from './src/models/user.js';
import userRoutes from './src/routes/userRoutes.js'
import residenceRoutes from './src/routes/residenceRoutes.js'

const router = express.Router();

const app = express();
const PORT=3000 || 5000;

//Middleware
app.use(express.json());
//connect db
connectDB();
app.use(userRoutes); 
app.use(residenceRoutes); 

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
})