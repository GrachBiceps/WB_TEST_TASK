const Router = require('express')
const router = new Router()

//ПОДКЛЮЧАЕМ КОНТРОЛЛЕР
const controller = require('./mainController')

router.post('/getItemQty', controller.getItemQty)

module.exports = router