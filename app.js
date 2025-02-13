import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import routes from './src/routes/index.js';
import cookieParser from 'cookie-parser';
dotenv.config(); 
const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.json());

//connect db
connectDB();
//cookie
app.use(cookieParser());
//routes
app.use(routes); 

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
})