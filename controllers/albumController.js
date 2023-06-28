const { Album, Band, Genre } = require('../models')

const getAlbums = async (req, res) => {
    const { search } = req.query
    let albums

    try {
        if (search) {
            const albumQueryConditions = []
            
            const genre  = await Genre.findOne({name: search})
            if (genre) albumQueryConditions.push({_id: {$in: genre.albums}})
            
            const band  = await Band.findOne({name: search})
            if (band) albumQueryConditions.push({band: band._id})

            albumQueryConditions.push({name: search})

            albums = await Album.find({$or: albumQueryConditions}).populate('band')
        } else {
            albums = await Album.find({}).populate('band')
        }
        res.json(albums)
    } catch (e) {
        console.log(e)
        res.send('An error happened')
    }
}

const getAlbumByName = async (req, res) => {
    try{
        const { name } = req.params
        const album = await Album.findOne({_id:name})
        res.json(album)
        } catch (e) {
            console.log(e)
            res.send('No records found.')
        } 
}

const deleteAlbum = async (req, res) => {
    try{
        const { id } = req.params
        const album = await Album.findByIdAndDelete(id)
        if(!album) throw Error('Not found.')
        res.status(200).json(album)
    } catch (e) {
        console.log(e)
        res.send('Not deleted.')
     } 
}

const createAlbum = async (req, res) => {
    try{
        const album = await Album.create(req.body)
        res.status(200).json(album)
    }  catch (e) {
        console.log(e)
        res.send('Not created.')
    }
}

const updateAlbum = async (req, res) => {
    try{
        const album = await Album.replaceOne({name: req.params.name}, req.body)
        res.status(200).json(album)
    } catch (e) {
        console.log(e)
        res.send('Not updated.')
    }
}

module.exports = {
    getAlbums,
    getAlbumByName,
    deleteAlbum,
    createAlbum,
    updateAlbum
}