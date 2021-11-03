const Router = require('express')
const router = new Router()
const madeCountryController = require('../controllers/madeCountryController')

router.post('/', madeCountryController.create)
router.get('/', madeCountryController.getAll)

module.exports = router
