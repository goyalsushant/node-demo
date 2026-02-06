import swaggerJsDoc from 'swagger-jsdoc'
import dotenv from 'dotenv'

dotenv.config()

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Salon Application',
      version: '1.0.0',
      description: "THis is application API description"
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORT}`,
        description: 'URL for Development server'
      },
      {
        url: `https://demo-sg-d6dgh0c3gubagmbu.centralindia-01.azurewebsites.net/`,
        description: 'URL for Live server'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: ['./routes/*.js'], // files containing annotations as above
};

export default swaggerJsDoc(options)