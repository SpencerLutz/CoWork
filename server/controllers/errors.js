const sendDbErrorRes = (res) => res.status(500).json({
    ok: 0,
    err: "Database error",
    tip: "Try again in a second"
})
module.exports.sendDbErrorRes = sendDbErrorRes


const sendTempNotFoundRes = (res) => res.status(404).json({
    ok: 0,
    err: "Template not found",
    tip: "Double check the URL and make sure you are authenticated"
})
module.exports.sendTempNotFoundRes = sendTempNotFoundRes


const sendUserNotFoundRes = (res) => res.status(404).json({
    ok: 0,
    err: "User not found",
    tip: "Double check the URL and make sure you are authenticated"
})
module.exports.sendUserNotFoundRes = sendUserNotFoundRes


const sendNoUsernameRes = (res) => res.status(400).json({ 
    ok: 0, 
    err: 'Username not provided',
    tip: 'A username is required when creating a user'
})
module.exports.sendNoUsernameRes = sendNoUsernameRes


const sendUsernameTooLongRes = (res) => res.status(400).json({
    ok: 0,
    err: 'Username is too long',
    tip: 'Username must be at most 20 characters'
})
module.exports.sendUsernameTooLongRes = sendUsernameTooLongRes


const sendUsernameInvalidRes = (res) => res.status(400).json({
    ok: 0,
    err: 'Username contains invalid characters',
    tip: 'Username can only contain letters, numbers, _, and .'
})
module.exports.sendUsernameInvalidRes = sendUsernameInvalidRes


const sendUsernameTakenRes = (res) => res.status(400).json({
    ok: 0,
    err: 'Username is taken',
    tip: 'sorry...'
})
module.exports.sendUsernameTakenRes = sendUsernameTakenRes

const sendTaskNotFoundRes = (res) => res.status(404).json({
    ok: 0,
    err: "Task not found",
    tip: "Double check the URL and make sure you are authenticated"
})
module.exports.sendTaskNotFoundRes = sendTaskNotFoundRes