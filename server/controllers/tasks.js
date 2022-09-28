const Users = require('../models/users.js')
const { generateId } = require('../utils/tasks.js')
const {
    sendDbErrorRes,
    sendTaskNotFoundRes,
    sendUserNotFoundRes
} = require('./errors.js')


// Get a task with given ID from the database
const getTask = (req, res) => {
    Users.findOne({username: req.params.username}, (err, found) => {
        if (err) sendDbErrorRes(res)
        else if (!found) sendUserNotFoundRes(res)
        else {
            const tasks = found.tasks.filter((task) => task.id === req.params.id)
            if (tasks.length < 1) sendTaskNotFoundRes(res)
            else res.json({ ok: 1, result: tasks[0] })
        }
    })
}
module.exports.getTask = getTask


// Get all tasks for the user
const getAllTasks = async (req, res) => {
    Users.findOne({username: req.params.username}, (err, found) => {
        if (err) sendDbErrorRes(res)
        else if (!found) sendUserNotFoundRes(res)
        else res.json({ ok: 1, result: found.tasks })
    })
}
module.exports.getAllTasks = getAllTasks


// Update the task with the given ID with info in request body
const updateTask = (req, res) => {
    Users.findOne({username: req.params.username}, (err, found) => {
        if (err) sendDbErrorRes(res)
        else if (!found) sendUserNotFoundRes(res)
        else {
            const tasks = found.tasks.filter((task) => task.id === req.params.id)
            if (tasks.length < 1) sendTaskNotFoundRes(res)
            else {
                const task = tasks[0]
                Object.keys(req.body).forEach((key) => {
                    task[key] = req.body[key]
                })
                found.save((err, result) => {
                    if (err) sendDbErrorRes(res)
                    else res.json({ 
                        ok: 1, 
                        result: result.tasks.filter((task) => task.id === req.params.id) 
                    })
                }) 
            }
        }
    })
}
module.exports.updateTask = updateTask
// TODO: Should I use returns instead of else to make this less ugly?

// Create a task with info in request body
const createTask = async (req, res) => {
    const data = req.body
    Users.findOne({username: req.params.username}, async (err, found) => {
        if (err) sendDbErrorRes(res)
        else if (!found) sendUserNotFoundRes(res)
        else {
            if (!('id' in data)) data.id = generateId(found)
            found.tasks.push(data)
            found.save((err, result) => {
                if (err) {
                    console.log("Error: " + err)
                    sendDbErrorRes(res)
                }
                else res.json({ 
                    ok: 1, 
                    result: result.tasks.filter((task) => task.id === data.id) 
                })
            }) 
        }
    })
}
module.exports.createTask = createTask


// Delete the task with the given ID
const deleteTask = (req, res) => {
    Users.findOne({username: req.params.username}, async (err, found) => {
        if (err) sendDbErrorRes(res)
        else if (!found) sendUserNotFoundRes(res)
        else {
            const tasks = found.tasks.filter((task) => task.id === req.params.id)
            if (tasks.length < 1) sendTaskNotFoundRes(res)
            else {
                tasks[0].remove()
                const result = await found.save()
                res.json({ ok: 1, result: result.tasks })
            }
        }
    })
}
module.exports.deleteTask = deleteTask