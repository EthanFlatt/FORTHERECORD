const Router = require('express').Router()
const controller = require('../controllers/songController')

Router.get('/', controller.getSongs)
Router.get('/:id', controller.getSongById)

module.exports = Router