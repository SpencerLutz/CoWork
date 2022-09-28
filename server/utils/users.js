const Templates = require('../models/users.js')

// Returns true if a user exists with the given username, false otherwise
const existsUser = async (username) => {
    const found = await Templates.findOne({username: username})
    return !!found
}
module.exports.existsUser = existsUser


// Returns true if username is too long, false otherwise
const usernameTooLong = (username) => {
    const maxLength = 20
    return (username.length > maxLength)
}
module.exports.usernameTooLong = usernameTooLong


// Returns true if username contains invalid chars, false otherwise
const usernameInvalidChars = (username) => {
    const validChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_.'
    for (var i = 0; i < username.length; i++)
        if (!validChars.includes(username[i])) return true
    return false
}
module.exports.usernameInvalidChars = usernameInvalidChars