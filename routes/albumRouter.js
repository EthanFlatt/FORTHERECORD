const Router = require('express').Router()
const controller = require('../controllers/albumController')

Router.get('/', controller.getAlbums)
Router.get('/:name', controller.getAlbumByName)
Router.delete('/:id', controller.deleteAlbum)
Router.post('/', controller.createAlbum)
Router.put('/:name', controller.updateAlbum)

module.exports = Router