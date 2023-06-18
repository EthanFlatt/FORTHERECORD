const { Schema } = require('mongoose')

const Cart = new Schema(
    {
        albums: {type: Schema.Types.ObjectId, ref: 'Album', required: true},
        user: {type: Number, required: true}
    },
    {timestamps: true}
)

module.exports = Cart