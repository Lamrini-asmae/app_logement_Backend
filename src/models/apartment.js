import mongoose from'mongoose';

const apartmentSchema = new mongoose.Schema({
    residence: { type: mongoose.Schema.Types.ObjectId, ref: 'Residence', required: true },
    number: { type: Number, required: true },
    floor: { type: Number, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    available: { type: Boolean, default: true },
    images: [{ type: String }], 
}, { timestamps: true });


const Apartment = mongoose.model('Apartment', apartmentSchema);
export default Apartment;
