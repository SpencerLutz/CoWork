const mongoose = require('mongoose')

let tasksSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        default: 'Untitled Task'
    },
    template: String, // ID of a template
    type: {
        type: String, // _ID of a type (contains history)
        default: ''
    },
    category: {
        type: String, // _ID of a category (contains default color)
        default: ''
    },
    color: {
        type: String,
        default: '#AA0033'
    },
    desc: {
        type: String,
        default: ''
    },
    notes: {
        type: String,
        default: ''
    },
    timespent: {
        type: Number,
        default: 0
    },
    date: {
        type: Number,
        default: 0
    }
})

module.exports = tasksSchema