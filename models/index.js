const mongoose = require('mongoose')
const bandSchema = require('./band')
const albumSchema = require('./album')
const genreSchema = require('./genre')
const cartSchema = require('./cart')

const Band = mongoose.model('Band', bandSchema)
const Album = mongoose.model('Album', albumSchema)
const Genre = mongoose.model('Genre', genreSchema)
const Cart = mongoose.model('Cart', cartSchema)

module.exports = {
    Band,
    Album,
    Genre,
    Cart
}
