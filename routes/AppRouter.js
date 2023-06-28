const Router = require('express').Router()

const bandRouter = require('./bandRouter')
const albumRouter = require('./albumRouter')
const genreRouter = require('./genreRouter')
const cartRouter = require('./cartRouter')

Router.use('/bands', bandRouter)
Router.use('/albums', albumRouter)
Router.use('/genres', genreRouter)
Router.use('/cart', cartRouter)

module.exports = Router