const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const path = require('path')

const templatesRoutes = require('./routes/templates.js')
const usersRoutes = require('./routes/users.js')
const tasksRoutes = require('./routes/tasks.js')

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3002

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.use('/api/templates', templatesRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/users/:username/tasks', tasksRoutes)

if (process.env.ENV === 'prod') {
    app.use(express.static(path.join(__dirname, '../client/build')))
    app.get('*', (req, res) => res.sendFile(
        path.resolve(__dirname, '../', 'client', 'build', 'index.html')
    ))
}

mongoose.connect(process.env.DB_URL).then(() => 
    app.listen(PORT, console.log(`Server running on port ${PORT}`)
)).catch((error) => console.log(error))