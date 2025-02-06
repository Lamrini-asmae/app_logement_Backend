import mongoose from 'mongoose';


const connectDB = async () => {
    // await mongoose.connect('')
    // .then(() => console.log(" MongoDB Connected!"))
    // .catch(err => console.log("MongoDB Connection Error:", err))
    try {
        await mongoose.connect("mongodb://localhost:27017/db_rental_app");
        console.log('MongoDB connecté');
      } catch (error) {
        console.error('Erreur de connexion à MongoDB:', error);
        process.exit(1);
      }

}
export default connectDB;


