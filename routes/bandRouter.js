const Router = require('express').Router()
const controller = require('../controllers/bandController')

Router.get('/', controller.getBands)
Router.get('/:id', controller.getBandById)

module.exports = Router