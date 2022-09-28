const express = require('express')
const router = express.Router()

const {
    getTemplate, 
    updateTemplate,
    createTemplate,
    deleteTemplate
} = require('../controllers/templates.js')

router.post('/', createTemplate)

router.get('/:id', getTemplate)
router.put('/:id', updateTemplate)
router.delete('/:id', deleteTemplate)

module.exports = router;