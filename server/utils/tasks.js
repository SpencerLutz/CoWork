const Tasks = require('../models/tasks.js')
const Users = require('../models/users.js')

// Generates a unique ID
const generateId = (user) => {
    const length = 6
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
    var id = ''
    do {
        for (var i = 0; i < length; i++)
            id += chars[Math.floor(Math.random()*chars.length)]
    } while (user.tasks.some((task) => task.id === id))
    return id
}
module.exports.generateId = generateId