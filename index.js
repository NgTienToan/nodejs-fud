const express = require('express')
const bodyParser = require('body-parser')
const connectDB = require('./config/db')

// Nhap khau routes
const todos = require('./routes/todos')

// Khoi dong app
const app = express()

// Khoi dong bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Khoi dong express middleware
app.use(express.json())

// Ket noi co so du lieu
connectDB()

// Mang routes vao de su dung
app.use('/todos', todos)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server run in port ${PORT}`))