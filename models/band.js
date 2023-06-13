const { Schema } = require('mongoose')

const Band = new Schema(
    {
        name: {type: String, required: true}
    },
    {timestamps: true}
)

module.exports = Band