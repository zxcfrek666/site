const {Material} = require('../models/models')
const ApiError = require('../error/ApiError');

class MaterialController {
    async create(req, res) {
        const {name} = req.body
        const materials = await Material.create({name})
        return res.json(materials)
    }

    async getAll(req, res) {
        const materials = await Material.findAll()
        return res.json(materials)
    }

}

module.exports = new MaterialController()