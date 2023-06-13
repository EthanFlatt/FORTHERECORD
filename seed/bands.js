const db = require('../db')
const { Band } = require('../models')

db.on('error', conosle.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const bands = [
        {
            name: 'Tyler the Creator'
        },
        {
            name: 'Frank Ocean'
        },
        {
            name: 'Tame impala'
        }
    ]
    await Band.insertMany(bands)
    console.log('created bands')
}

const run = async () => {
    await main()
    db.close
}

run()