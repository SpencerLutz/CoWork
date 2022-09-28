const express = require('express')
const router = express.Router({ mergeParams: true })

const {
    getTask, 
    getAllTasks,
    updateTask,
    createTask,
    deleteTask
} = require('../controllers/tasks.js')

router.get('/', getAllTasks)
router.post('/', createTask)

router.get('/:id', getTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router;