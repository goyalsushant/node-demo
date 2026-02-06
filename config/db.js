import mongoose from 'mongoose'

await mongoose.connect(process.env.AZURE_COSMOS_CONNECTIONSTRING)
    .then(() => console.log('Database connection successful'))
    .catch((err) => console.log('Connection Failed: ', err))

export default mongoose