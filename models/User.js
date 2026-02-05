import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String,
            unique: true
        },
        password: {
            type: String
        },
        role: {
            type: String,
            enum: ['ADMIN', 'STORE_ADMIN', 'RECEPTIONIST'],
            default: 'RECEPTIONIST'
        },
        mobile: {
            type: Number
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model('User', userSchema)