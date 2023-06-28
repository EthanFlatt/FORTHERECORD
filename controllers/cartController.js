const { Cart, Album } = require('../models')

const addToCart = async (req, res) => {
    try{
        const album = await Album.findOneAndUpdate({user:1}, req.body)
        res.status(200).json({album})
    }  catch (e) {
        console.log(e)
        res.send('Not created.')
    }
}

module.exports = {
    addToCart
}