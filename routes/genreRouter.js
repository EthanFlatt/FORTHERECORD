const Router = require('express').Router()
const controller = require('../controllers/genreController')

Router.get('/', controller.getGenres)
Router.get('/:name', controller.getGenreByName)
Router.delete('/:id', controller.deleteGenre)

module.exports = Router