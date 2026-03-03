const mongoose = require('mongoose')
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URL)

    console.log('Connected to DB');

}

module.exports = connectDB