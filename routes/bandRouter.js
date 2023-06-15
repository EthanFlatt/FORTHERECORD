const Router = require('express').Router()
const controller = require('../controllers/bandController')

Router.get('/', controller.getBands)
Router.get('/:name', controller.getBandByName)
Router.delete('/:id', controller.deleteBand)

module.exports = Router