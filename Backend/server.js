const app = require('./src/app')
const connectDB = require('./src/db/db')
const dotenv = require('dotenv')

dotenv.config()

connectDB()

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on " + PORT));