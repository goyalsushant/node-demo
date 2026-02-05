import { Router } from "express";
import { createService, deleteService, getService, updateService, } from "../controllers/service.controller.js";
import { validateToken } from "../middleware/auth.js";
import { validateRole } from "../middleware/role.js";

const router = Router()

/**
 * @swagger
 * tags:
 *  name: Service
 *  description: APIs to perform CRUD on services
 */

/**
 * @swagger
 * /service:
 *   post:
 *     summary: Create service
 *     tags: [Service]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, price, duration]
 *     responses:
 *       200:
 *         description: Service created
 */
router.post('/', validateToken, validateRole('ADMIN', 'STORE_ADMIN'), createService)

/**
 * @swagger
 * /service:
 *   get:
 *     summary: Get all services
 *     tags: [Service]
 *     responses:
 *       200:
 *         description: List of services
 */
router.get('/', validateToken, getService)

/**
 * @swagger
 * /service/{id}:
 *   put:
 *     summary: Update a service by ID
 *     tags: [Service]
 *     parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: string
 *     responses:
 *       200:
 *         description: List of services
 */
router.put('/:id', validateToken, validateRole('ADMIN', 'STORE_ADMIN'), updateService)

/**
 * @swagger
 * /service/{id}:
 *   delete:
 *     summary: Delete a service by ID
 *     tags: [Service]
 *     parameters:
 *          - in: path
 *            name: id
 *            required: true
 *            schema:
 *              type: string
 *     responses:
 *       200:
 *         description: List of services
 */
router.delete('/:id', validateToken, validateRole('ADMIN', 'STORE_ADMIN'), deleteService)

export default router