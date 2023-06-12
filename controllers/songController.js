const { Song } = require('../models')
const songSchema = require('../models/song')

const getSongs = async (req, res) => {
    const songs = await Song.find()
    res.json(songs)
}

const getSongById = async (req, res) => {
    try{
        const { id } = req.params
        const song = await Song.findById(id)
        if(!song) throw Error('No records found.')
        res.json(song)
        } catch (e) {
            console.log(e)
            res.send('No records found.')
        } 
}

module.exports = {
    getSongs,
    getSongById
}