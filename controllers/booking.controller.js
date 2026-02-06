import Booking from "../models/Booking.js"
import createTransporter from '../config/mail.js'
import Service from "../models/Service.js"
import nodemailer from 'nodemailer'

export const createBooking = async (req, res) => {
    try {
        const booking = await Booking.create({
            ...req.body,
            bookedBy: req.user.id
        })

        const service = await Service.findById(req.body.service)

        const transporter = await createTransporter()

        let info = await transporter.sendMail({
            from: 'Salon <reception@salon.com>',
            to: req.user.email || 'test@mail.com',
            subject: 'Booking Confirmed',
            text: `Your booking confirmed for ${service.name} on ${req.body.date}`,
            html: `<h3>Booking Confirmed</h3>`
        })

        console.log('Nodemailer Preview:', nodemailer.getTestMessageUrl(info))

        res.json({ message: 'Booking created successfully' })
    }
    catch (err) {
        res.status(400)
        res.json({ message: err.message })
    }
}

export const listBooking = async (req, res) => {
    try {
        const bookings = await Booking.find({})
            .populate('service', "name description")
            .populate('bookedBy', "name email")
        res.json({ bookings })
    }
    catch (err) {
        res.status(500)
        res.json({ message: err.message })
    }
}