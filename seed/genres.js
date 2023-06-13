const db = require('../db')
const { Band, Album, Genre } = require('../models')

db.on('error', conosle.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const albums = await Album.find()

    const genre = [
        {
           type: 'Hip hop'
        }
     
    ]
    await Genre.insertMany(songs)
    console.log('created songs')
}

const run = async () => {
    await main()
    db.close
}

run()