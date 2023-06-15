const { Schema } = require('mongoose')

const Genre= new Schema(
    {
        name: {type: String, required: true},
        albums: [{type: Schema.Types.ObjectId, ref: 'Album', required: true}]
    },
    {timestamps: true}
)

module.exports = Genre