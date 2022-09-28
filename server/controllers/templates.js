const Templates = require('../models/templates.js')
const { generateId } = require('../utils/templates.js')
const {
    sendDbErrorRes,
    sendTempNotFoundRes
} = require('./errors.js')


// Get a template with given ID from the database
const getTemplate = (req, res) => {
    Templates.findOne({id: req.params.id}, (err, found) => {
        if (err) sendDbErrorRes(res)
        else if (!found) sendTempNotFoundRes(res)
        else res.json({ ok: 1, result: found})
    })
}
module.exports.getTemplate = getTemplate


// Update the template with the given ID with info in request body
const updateTemplate = (req, res) => {
    Templates.updateOne({id: req.params.id}, req.body, (err, result) => {
        if (err) sendDbErrorRes(res)
        else if (result.matchedCount < 1) sendTempNotFoundRes(res)
        else res.json({ ok: 1 })
    })
}
module.exports.updateTemplate = updateTemplate


// Create a template with info in request body
const createTemplate = async (req, res) => {
    const data = req.body
    if (!('id' in data)) data.id = await generateId()
    Templates.create(data, (err, result) => {
        if (err) sendDbErrorRes(res)
        else res.json({ ok: 1, result: result })
    })
}
module.exports.createTemplate = createTemplate


// Delete the template with the given ID
const deleteTemplate = (req, res) => {
    Templates.deleteOne({id: req.params.id}, (err, result) => {
        if (err) sendDbErrorRes(res)
        else if (result.deletedCount < 1) sendTempNotFoundRes(res)
        else res.json({ ok: 1 })
    })
}
module.exports.deleteTemplate = deleteTemplate