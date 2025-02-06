import mongoose from'mongoose';

const reservationSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    apartment: { type: mongoose.Schema.Types.ObjectId, ref: 'Apartment', required: true },
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
    Message: { type: String, required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
}, { timestamps: true });


const Reservation = mongoose.model('Reservation', reservationSchema);
export default Reservation;
