import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'
import bookingRoutes from './routes/booking.route.js'
import serviceRoutes from './routes/service.route.js'
import mongoose from './config/db.js'

import swaggerUI from 'swagger-ui-express'
import swaggerSpec from './config/swagger.js'


dotenv.config()

const app = express()

app.use(express.json())
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))

app.use('/auth', authRoutes)
app.use('/booking', bookingRoutes)
app.use('/service', serviceRoutes)


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT}`)
})