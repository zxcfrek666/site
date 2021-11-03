const {Color} = require('../models/models')
const ApiError = require('../error/ApiError');

class colorController {
    async create(req, res) {
        let {name, color} = req.body
        console.log(name);
        const Colors = await Color.create({name, color})
        return res.json(Colors)
    }

    async getAll(req, res) {
        const Colors = await Color.findAll()
        return res.json(Colors)
    }

}

module.exports = new colorController()