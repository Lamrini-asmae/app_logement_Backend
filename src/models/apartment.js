import mongoose from'mongoose';

const apartmentSchema = new mongoose.Schema({
    residence: { type: mongoose.Schema.Types.ObjectId, ref: 'Residence', required: true },
    title: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    available: { type: Boolean, default: true },
    images: [{ type: String }], // URLs of apartment images
}, { timestamps: true });


const Apartment = mongoose.model('Apartment', apartmentSchema);
export default Apartment;
