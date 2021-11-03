const {ProductClass} = require('../models/models')
const ApiError = require('../error/ApiError');

class productClassController {
    async create(req, res) {
        const {name} = req.body
        const classes = await ProductClass.create({name})
        return res.json(classes)
    }

    async getAll(req, res) {
        const classes = await ProductClass.findAll()
        return res.json(classes)
    }

}

module.exports = new productClassController()