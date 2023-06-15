const { Schema } = require('mongoose')

const Album = new Schema(
    {
        name: {type: String, required: true},
        band: {type: Schema.Types.ObjectId, ref: 'Band', required: true},
        priceInDollars: {type: Number, required: true},
        image: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = Album