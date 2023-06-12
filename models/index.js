const mongoose = require('mongoose')
const bandSchema = require('./band')
const albumSchema = require('./album')
const songSchema = require('./song')

const Band = mongoose.model('Band', bandSchema)
const Album = mongoose.model('Album', albumSchema)
const Song = mongoose.model('Song', songSchema)

module.exports = {
    Band,
    Album,
    Song
}
