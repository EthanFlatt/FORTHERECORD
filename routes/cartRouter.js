const Router = require('express').Router()
const controller = require('../controllers/cartController')

Router.post('/', controller.addToCart)

module.exports = Router