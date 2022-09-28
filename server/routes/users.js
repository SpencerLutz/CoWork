const express = require('express')
const router = express.Router()

const {
    getUser, 
    updateUser,
    createUser,
    deleteUser
} = require('../controllers/users.js')

router.post('/', createUser)

router.get('/:username', getUser)
router.put('/:username', updateUser)
router.delete('/:username', deleteUser)

module.exports = router;