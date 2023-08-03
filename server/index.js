const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const adminRoute = require('./routes/admin')
const userRoute = require('./routes/user')
const { User, Admin, Course } = require('./db')

require('dotenv').config()
const app = express()

app.use(express.json())
app.use(cors())

app.use('/admin', adminRoute)
app.use('/user', userRoute)

const port = process.env.PORT || 3000

mongoose.connect(process.env.URL)


app.listen(port, () => {
    console.log(`Server runing on port: ${port}`)
})