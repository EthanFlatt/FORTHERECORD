const db = require('../db')
const { Band, Album } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const bands = await Band.find()

    const albums = [
        {
            name: 'Flower Boy',
            genre: 'Hip Hop',
            band: ,
            length: '46:33',
            image: 'https://en.wikipedia.org/wiki/Flower_Boy#/media/File:Tyler,_the_Creator_-_Flower_Boy.png'
        }
    ]
    await Album.insertMany(albums)
    console.log('albums created.')
}

const run = async () => {
    await main()
    db.close
}

run()