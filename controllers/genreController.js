const { Genre } = require('../models')
const genreSchema = require('../models/song')

const getGenres = async (req, res) => {
    const genres = await Genre.find()
    res.json(genres)
}

const getGenreById = async (req, res) => {
    try{
        const { id } = req.params
        const genre = await Genre.findById(id)
        if(!genre) throw Error('No records found.')
        res.json(genre)
        } catch (e) {
            console.log(e)
            res.send('No records found.')
        } 
}

module.exports = {
    getGenres,
    getGenreById
}