import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config(); 

const connectDB = async () => {
    // await mongoose.connect('')
    // .then(() => console.log(" MongoDB Connected!"))
    // .catch(err => console.log("MongoDB Connection Error:", err))
    try {
      if (!process.env.MONGO_URI) {
        throw new Error('ERREUR: La variable d\'environnement MONGO_URI est manquante.');
      }
    await mongoose.connect(process.env.MONGO_URI);

        console.log('MongoDB connecté');
      } catch (error) {
        console.error('Erreur de connexion à MongoDB:', error);
        process.exit(1);
      }

}
export default connectDB;


