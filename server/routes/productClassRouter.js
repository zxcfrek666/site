const Router = require('express')
const router = new Router()
const productClassController = require('../controllers/productClassController')

router.post('/', productClassController.create)
router.get('/', productClassController.getAll)

module.exports = router
