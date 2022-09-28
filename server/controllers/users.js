const Users = require('../models/users.js')
const {
    existsUser,
    usernameTooLong,
    usernameInvalidChars
} = require('../utils/users.js')
const {
    sendDbErrorRes,
    sendUserNotFoundRes,
    sendNoUsernameRes,
    sendUsernameTooLongRes,
    sendUsernameInvalidRes,
    sendUsernameTakenRes
} = require('./errors.js')


// Get a user with given username from the database
const getUser = (req, res) => {
    Users.findOne({username: req.params.username}, (err, found) => {
        if (err) sendDbErrorRes(res)
        else if (!found) sendUserNotFoundRes(res)
        else res.json({ ok: 1, result: found})
    })
}
module.exports.getUser = getUser


// Update the user with the given username with info in request body
const updateUser = (req, res) => {
    Users.updateOne({username: req.params.username}, req.body, (err, result) => {
        if (err) sendDbErrorRes(res)
        else if (result.matchedCount < 1) sendUserNotFoundRes(res)
        else res.json({ ok: 1 })
    })
}
module.exports.updateUser = updateUser


// Create a User with info in request body
const createUser = async (req, res) => {
    const username = req.body.username
    if (!username) sendNoUsernameRes(res)
    else if (usernameTooLong(username)) sendUsernameTooLongRes(res)
    else if (usernameInvalidChars(username)) sendUsernameInvalidRes(res)
    else if (await existsUser(username)) sendUsernameTakenRes(res)
    else {
        Users.create(req.body, (err, result) => {
            console.log(err)
            if (err) sendDbErrorRes(res)
            else res.json({ ok: 1, result: result })
        })
    }
}
module.exports.createUser = createUser


// Delete the user with the given username
const deleteUser = (req, res) => {
    Users.deleteOne({username: req.params.username}, (err, result) => {
        if (err) sendDbErrorRes(res)
        else if (result.deletedCount < 1) sendUserNotFoundRes(res)
        else res.json({ ok: 1 })
    })
}
module.exports.deleteUser = deleteUser