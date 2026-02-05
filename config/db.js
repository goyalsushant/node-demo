import mongoose from 'mongoose'
// mongodb+srv://medi_admin_dev:<db_password>@dev-medibd.xdq9x.mongodb.net/?appName=dev-medibd
mongoose.connect('mongodb://127.0.0.1:27017/salon')
    .then(() => console.log('Database connection successful'))
    .catch((err) => console.log('Connection Failed: ', err))

export default mongoose