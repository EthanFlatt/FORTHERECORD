const Router = require('express').Router()

const bandRouter = require('./bandRouter')
const albumRouter = require('./albumRouter')
const genreRouter = require('./genreRouter')

Router.use('/bands', bandRouter)
Router.use('/albums', albumRouter)
Router.use('/genres', genreRouter)

module.exports = Router