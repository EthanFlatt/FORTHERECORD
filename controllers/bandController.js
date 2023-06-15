const { Band } = require('../models')

const getBands = async (req, res) => {
    const bands = await Band.find()
    res.json(bands)
}

const getBandByName = async (req, res) => {
    try{
        const { name } = req.params
        const band  = await Band.findOne({name})
        res.json(band)
    } catch (e) {
        console.log(e)
        res.send('No records found.')
    } 
}

const deleteBand = async (req, res) => {
    try{
        const { id } = req.params
        const band = await Band.findByIdAndDelete(id)
        if(!band) throw Error('Not found.')
        res.status(200).json(band)
        } catch (e) {
            console.log(e)
            res.send('Not deleted.')
        } 
    }

module.exports = {
    getBands,
    getBandByName,
    deleteBand
}