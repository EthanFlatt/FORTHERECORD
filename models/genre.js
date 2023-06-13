const { Schema } = require('mongoose')
const { getMaxListeners } = require('./band')

const Song = new Schema(
    {
        type: {type: String, required: true},
        album: {type: Schema.Types.ObjectId, ref: 'Album'}
    },
    {timestamps: true}
)

module.exports = Genre