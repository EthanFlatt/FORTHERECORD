const Router = require('express').Router()
const controller = require('../controllers/albumController')

Router.get('/', controller.getAlbums)
Router.get('/:id', controller.getAlbumById)

module.exports = Router