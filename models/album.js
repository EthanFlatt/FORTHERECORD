const { Schema } = require('mongoose')

const Album = new Schema(
    {
        name: {type: String, required: true},
        band: {type: Schema.Types.ObjectId, ref: 'Band'},
        length: {type: String, required: true},
        tracks: {type: String, required: true},
        image: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = Album