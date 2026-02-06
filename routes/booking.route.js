import { Router } from "express";
import { createBooking, listBooking } from "../controllers/booking.controller.js";
import { validateToken } from "../middleware/auth.js";
import { validateRole } from "../middleware/role.js";

const router = Router()

/**
 * @swagger
 * tags:
 *  name: Booking
 *  description: API for booking an appointment
 */

/**
 * @swagger
 * /booking:
 *   post:
 *     summary: Create booking
 *     tags: [Booking]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [customerName, customerEmail, service, date]
 *     responses:
 *       200:
 *         description: Booking created and email triggered
 */
router.post('/', validateToken, validateRole('STORE_ADMIN', 'RECEPTIONIST'), createBooking)

/**
 * @swagger
 * /booking:
 *   get:
 *     summary: Get all bookings
 *     tags: [Booking]
 *     responses:
 *       200:
 *         description: List of bookings
 */
router.get('/', validateToken, listBooking)

export default router