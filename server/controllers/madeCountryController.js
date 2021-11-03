const {MadeCountry} = require('../models/models')
const ApiError = require('../error/ApiError');

class madeCountryController {
    async create(req, res) {
        const {name} = req.body
        const madeCountrys = await MadeCountry.create({name})
        return res.json(madeCountrys)
    }

    async getAll(req, res) {
        const madeCountrys = await MadeCountry.findAll()
        return res.json(madeCountrys)
    }

}

module.exports = new madeCountryController()