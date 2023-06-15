const db = require('../db')
const { Band } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const bands = [
        {
            name: 'Tyler the Creator'
        },
        {
            name: 'Frank Ocean'
        },
        {
            name: 'Tame Impala'
        },
        {
            name: 'Nirvana'
        },
        {
            name: 'Depeche Mode'
        },
        {
            name: 'Modest Mouse'
        },
        {
            name: 'Kanye West'
        },
        {
            name: 'ABBA'
        },
        {
            name: 'Gorillaz'
        },
        {
            name: 'MGMT'
        },
        {
            name: 'The White Stripes'
        },
        {
            name: 'kendrick Lamar'
        },
        {
            name: 'YG'
        },
        {
            name: 'Amy Winehouse'
        },
        {
            name: 'Weezer'
        },
        {
            name: 'Black Keys'
        },
        {
            name: 'My Chemical Romance'
        },
        {
            name: 'The Strokes'
        },
        {
            name: 'The Killers'
        },
        {
            name: 'The Beatles'
        },
        {
            name: 'Foo Fighters'
        },
        {
            name: 'King Gizzard & the Lizard Wizard'
        },
        {
            name: 'The Police'
        },
        {
            name: 'Fela Kuti'
        },
        {
            name: 'Alicia Keys'
        },
        {
            name: 'Adele'
        },
        {
            name: 'Kali Uchis'
        },
        {
            name: 'Sade'
        },
        {
            name: 'Fugees'
        },
        {
            name: 'Lauryn Hill'
        },
        {
            name: 'A Tribe Called Quest'
        },
        {
            name: 'Bad Brains'
        },
        {
            name: 'The HU'
        },
        {
            name: 'Mdou Moctar'
        },
        {
            name: 'Tinariwen'
        },
        {
            name: 'Mac DeMarco'
        },
        {
            name: 'Childish Gambino'
        },
        {
            name: 'Maroon 5'
        },
        {
            name: 'Bob Marley'
        },
        {
            name: 'MF DOOM'
        },
        {
            name: 'Earth, Wind & Fire'
        },
        {
            name: 'Outkast'
        },
        {
            name: 'Khruangbin'
        },
        {
            name: 'Chthonic'
        },
        {
            name: 'Daft Punk'
        },
        {
            name: 'Musical Youth'
        },
        {
            name: 'Black Pumas'
        },
        {
            name: 'The Roots'
        },
        {
            name: 'Alabama Shakes'
        },
        {
            name: 'Gary Clark Jr.'
        },
        {
            name: 'Doja Cat'
        },
        {
            name: 'Sublime'
        },
        {
            name: 'Santana'
        },
        {
            name: 'George Michael'
        },
        {
            name: 'Tears For Fears'
        },
        {
            name: 'Boney M.'
        },
        {
            name: 'Bill Withers'
        },
        {
            name: 'Tupac'
        },
        {
            name: 'The Notorious B.I.G'
        },
        {
            name: 'The Alan Parsons Project'
        },
        {
            name: 'Radiohead'
        },
        {
            name: 'Norah Jones'
        },
        {
            name: 'Isaiah Rashad'
        },
        {
            name: 'Gulch'
        }

    ]
    await Band.deleteMany({})
    await Band.insertMany(bands)
    console.log('created bands')
}

const run = async () => {
    await main()
    db.close
}

run()