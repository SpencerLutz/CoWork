const mongoose = require('mongoose')

let templatesSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        default: 'Untitled Task'
    },
    desc: String,
    due: Date
})

module.exports = mongoose.model('templates', templatesSchema)