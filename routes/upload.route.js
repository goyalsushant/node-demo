import { Router } from 'express'
import multer from 'multer'
import { uploadController } from '../controllers/upload.controller.js';

const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

/**
 * @swagger
 * tags:
 *  name: Upload
 *  description: APIs to perform CRUD on services
 */

/**
 * @swagger
 * /upload:
 *   post:
 *     summary: Upload an image to Blob Storage
 *     tags: [Upload]
 *     requestBody:
 *          required: true
 *          content:
 *              multipart/form-data:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          file:
 *                              type: string
 *                              format: binary
 *                              description: The file to upload
 *                          description:
 *                              type: string
 *                              description: Optional description for the file
 *     responses:
 *       201:
 *         description: File uploaded successfully
 */
router.post("/upload", upload.single("file"), uploadController);

export default router