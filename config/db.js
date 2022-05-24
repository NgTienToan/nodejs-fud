const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')
console.log(db);
const connectDB = async () => {
  try {
    await mongoose.connect(db)
    console.log('Connected')
  } catch (error) {
    console.log(error.message)
    process.exit(1)
  }
}

module.exports = connectDB