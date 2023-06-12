const { Band } = require('../models')
const bandSchema = require('../models/band')

const getBands = async (req, res) => {
    const bands = await Band.find()
    res.json(bands)
}

const getBandById = async (req, res) => {
    try{
        const { id } = req.params
        const band = await Band.findById(id)
        if(!band) throw Error('No records found.')
        res.json(band)
        } catch (e) {
            console.log(e)
            res.send('No records found.')
        } 
}

module.exports = {
    getBands,
    getBandById
}