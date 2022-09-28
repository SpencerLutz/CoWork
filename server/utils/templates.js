const Templates = require('../models/templates.js')

// Returns true if a template exists with the given ID, false otherwise
const existsTemplate = async (id) => {
    const found = await Templates.findOne({id: id})
    return !!found
}


// Generates a unique ID
const generateId = async () => {
    const length = 6
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
    var id = ''
    do {
        for (var i = 0; i < length; i++)
            id += chars[Math.floor(Math.random()*chars.length)]
    } while (await existsTemplate(id))
    return id
}
module.exports.generateId = generateId