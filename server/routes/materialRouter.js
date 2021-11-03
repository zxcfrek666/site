const Router = require('express')
const router = new Router()
const materialController = require('../controllers/materialController')

router.post('/', materialController.create)
router.get('/', materialController.getAll)

module.exports = router
