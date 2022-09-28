const mongoose = require('mongoose')
const tasksSchema = require('../models/tasks.js')

let usersSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tasks: {
        type: [ tasksSchema ],
        required: true,
        default: []
    }
})

module.exports = mongoose.model('users', usersSchema)