const { Genre } = require('../models')

const getGenres = async (req, res) => {
    const genres = await Genre.find().populate('albums')
    res.json(genres)
}

const getGenreByName = async (req, res) => {
    try{
        const { name } = req.params
        const genre = await Genre.findOne({name})
        res.json(genre)
        } catch (e) {
            console.log(e)
            res.send('No records found.')
        } 
}

const deleteGenre = async (req, res) => {
    try{
        const { id } = req.params
        const genre = await Genre.findByIdAndDelete(id)
        if(!genre) throw Error('Not found.')
        res.status(200).json(genre)
        } catch (e) {
            console.log(e)
            res.send('Not deleted.')
        } 
    }


module.exports = {
    getGenres,
    getGenreByName,
    deleteGenre
}