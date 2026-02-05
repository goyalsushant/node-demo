import mongoose from 'mongoose'

const bookingSchema = new mongoose.Schema(
    {
        customerName: String,
        customerEmail: String,
        service: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Service"
        },
        bookedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        date: Date
    },
    { timestamps: true }
)

export default mongoose.model('Booking', bookingSchema)