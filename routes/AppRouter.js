const Router = require('express').Router()

const bandRouter = require('./bandRouter')
const albumRouter = require('./albumRouter')
const songRouter = require('./songRouter')

Router.use('/bands', bandRouter)
Router.use('/albums', albumRouter)
Router.use('/songs', songRouter)

module.exports = Router