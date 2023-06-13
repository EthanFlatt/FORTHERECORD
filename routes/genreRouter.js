const Router = require('express').Router()
const controller = require('../controllers/genreController')

Router.get('/', controller.getGenres)
Router.get('/:id', controller.getGenreById)

module.exports = Router