import { Router } from "express";
import { login, signUp } from "../controllers/auth.controller.js";

const router = Router()

/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Authentication API
 */

/**
 * @swagger
 * /auth/signup:
 *  post:
 *      summary: Create User - ADMIN / STORE_ADMIN / RECEPTIONIST
 *      tags: [Auth]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required: [name, email, password, role]
 *                      properties:
 *                          name:
 *                              type: string
 *                          email:
 *                              type: string
 *                          password:
 *                              type: string
 *                          role:
 *                              type: string
 *                              enum: [ADMIN, STORE_ADMIN, RECEPTIONIST]
 *                          mobile:
 *                              type: number
 *      responses:
 *       200:
 *         description: User created

 */
router.post('/signup', signUp)

/**
 * @swagger
 * /auth/login:
 *  post:
 *      summary: User Login
 *      tags: [Auth]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      required: [email,password]
 *                      properties:
 *                          email:
 *                              type: string
 *                          password:
 *                              type: string
 *      responses:
 *          200:
 *              description: Login Successful
 */
router.post('/login', login)

export default router