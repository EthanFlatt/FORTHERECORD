const { Album } = require('../models')
const albumSchema = require('../models/album')

const getAlbums = async (req, res) => {
    const albums = await Album.find()
    res.json(albums)
}

const getAlbumById = async (req, res) => {
    try{
        const { id } = req.params
        const album = await Album.findById(id)
        if(!album) throw Error('No records found.')
        res.json(album)
        } catch (e) {
            console.log(e)
            res.send('No records found.')
        } 
}

module.exports = {
    getAlbums,
    getAlbumById
}