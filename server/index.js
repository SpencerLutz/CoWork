const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const templatesRoutes = require('./routes/templates.js')
const usersRoutes = require('./routes/users.js')
const tasksRoutes = require('./routes/tasks.js')

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3002

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.use('/templates', templatesRoutes)
app.use('/users', usersRoutes)
app.use('/users/:username/tasks', tasksRoutes)

mongoose.connect(process.env.DB_URL).then(() => 
    app.listen(PORT, console.log(`Server running on port ${PORT}`)
)).catch((error) => console.log(error))