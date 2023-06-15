const db = require('../db')
const { Album, Genre } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {

    const flowerBoy = await Album.findOne({name: 'Flower Boy'})
    const mtvUnplugged = await Album.findOne({name: 'MTV Unplugged In New York (Live Acoustic)'})
    const currents = await Album.findOne({name: 'Currents'})
    const blonde = await Album.findOne({name: 'Blonde'})
    const channelOrange= await Album.findOne({name: 'Channel Orange'})
    const violator = await Album.findOne({name: 'Violator'})
    const goodNewsforPeopleWhoLoveBadNews = await Album.findOne({name: 'Good News for People Who Love Bad News'})
    const weWereDeadBeforetheShipEvenSank = await Album.findOne({name: 'We Were Dead Before the Ship Even Sank'})
    const theCollegeDropout = await Album.findOne({name: 'The College Droput'})
    const lateRegistration = await Album.findOne({name: 'Late Regestration'})
    const graduation = await Album.findOne({name: 'Graduation'})
    const abbaGold = await Album.findOne({name: 'ABBA Gold'})
    const gorillaz = await Album.findOne({name: 'Gorillaz'})
    const demonDays = await Album.findOne({name: 'Demon Days'})
    const oracularSpectacular= await Album.findOne({name: 'Oracular Spectacular'})
    const whiteBloodCells= await Album.findOne({name: 'White Blood Cells'})
    const toPimpaButterfly = await Album.findOne({name: 'To Pimp a Butterfly'})
    const stillBrazy = await Album.findOne({name: 'Still Brazy'})
    const backToBlack = await Album.findOne({name: 'Back to Black'})
    const theBlueAlbum = await Album.findOne({name: 'The Blue Album'})
    const brothers = await Album.findOne({name: 'Brothers'})
    const theBlackParade = await Album.findOne({name: 'The Black Parade'})
    const roomOnFire= await Album.findOne({name: 'Room on Fire'})
    const hotFuss = await Album.findOne({name: 'Hot Fuss'})
    const sgtPeppersLonelyHeartsClubBand = await Album.findOne({name: "Sgt. Pepper's Lonely Hearts Club band"})
    const theColourAndTheShape= await Album.findOne({name: 'The Coulour and the Shape'})
    const flyingMicrotonalBanana = await Album.findOne({name: 'Flying Microtonal banana'})
    const outlandosDamour = await Album.findOne({name: "Outlandos d'amour"})
    const live = await Album.findOne({name: 'Live!'})
    const SongsInAMinor = await Album.findOne({name: 'Songs in A Minor'})
    const twentyOne = await Album.findOne({name: '21'})
    const isolation = await Album.findOne({name: 'Isolation'})
    const diamondLife = await Album.findOne({name: 'Diamond Life'})
    const theScore = await Album.findOne({name: 'The Score'})
    const theMiseducationofLaurynHill = await Album.findOne({name: 'The Miseducation of Lauryn Hill'})
    const theLowEndTheory = await Album.findOne({name: 'The Low End Theory'})
    const badBrains = await Album.findOne({name: 'Bad Brains'})
    const theGereg = await Album.findOne({name: 'The Gereg'})
    const afriqueVictime = await Album.findOne({name: 'Afrique Victime'})
    const elwan = await Album.findOne({name: 'Elwan'})
    const saladDays = await Album.findOne({name: 'Salad Days'})
    const awakenMyLove = await Album.findOne({name: 'Awaken, My Love!'})
    const songsAboutJane = await Album.findOne({name: 'Songs About Jane'})
    const legend = await Album.findOne({name: 'Legend'})
    const mmFood = await Album.findOne({name: 'Mm..Food'})
    const theBestOfEarthWindAndFireVolumeOne = await Album.findOne({name: 'The Best of Earth, Wind & Fire, Vol. 1'})
    const stankonia = await Album.findOne({name: 'Stankonia'})
    const conTodoElMundo = await Album.findOne({name: 'Con Todo el Mundo'})
    const takasagoArmy = await Album.findOne({name: 'Takasago Army'})
    const discovery = await Album.findOne({name: 'Discovery'})
    const theYouthOfToday = await Album.findOne({name: 'The Youth of Today'})
    const blackPumas = await Album.findOne({name: 'Black Pumas'})
    const thingsFallApart = await Album.findOne({name: 'Things Fall Apart'})
    const theStoryOfSonnyBoySlim = await Album.findOne({name: 'The Story of Sonny Boy Slim'})
    const planetHer = await Album.findOne({name: 'Planet Her'})
    const sublime = await Album.findOne({name: 'Sublime'})
    const supernatural = await Album.findOne({name: 'Supernatural'})
    const ladiesAndGentlemenTheBestOfGeorgeMichael = await Album.findOne({name: 'Ladies and Gentlemen: The Best of George Michael'})
    const songsFromTheBigChair = await Album.findOne({name: 'Songs from the Big Chair'})
    const nightflightToVenus = await Album.findOne({name: 'Nightflight to Venus'})
    const justAsIAm = await Album.findOne({name: 'Just As I Am'})
    const lifeAfterDeath = await Album.findOne({name: 'Life After Death'})
    const allEyezOnMe= await Album.findOne({name: 'All Eyez on Me'})
    const eyeInTheSKy = await Album.findOne({name: 'Eye in the Sky'})
    const okComputer = await Album.findOne({name: 'OK Computer'})
    const comeAwayWithMe = await Album.findOne({name: 'Come Away with Me'})
    const theSunstirade = await Album.findOne({name: 'The Suns Tirade'})
    const soundAndColor = await Album.findOne({name: 'Sound and Color'})

    const genres = [
        {
            name: 'hip hop',
            albums: [flowerBoy._id, theCollegeDropout._id, lateRegistration._id, graduation._id, toPimpaButterfly._id, theScore._id, theLowEndTheory._id, mmFood._id, stankonia._id, thingsFallApart._id, lifeAfterDeath._id, allEyezOnMe._id, theSunstirade._id]
        },
        {
            name: 'rock',
            albums: [mtvUnplugged._id, goodNewsforPeopleWhoLoveBadNews._id, weWereDeadBeforetheShipEvenSank._id, gorillaz._id, demonDays._id, stillBrazy._id, brothers._id, theBlackParade._id, roomOnFire._id, hotFuss._id, sgtPeppersLonelyHeartsClubBand._id, theColourAndTheShape._id, flyingMicrotonalBanana._id, outlandosDamour._id, afriqueVictime._id, saladDays._id, songsAboutJane._id, conTodoElMundo._id, theStoryOfSonnyBoySlim._id, supernatural._id, eyeInTheSKy._id, okComputer._id]
        },
        {
            name: 'pop',
            albums: [currents._id, violator._id, abbaGold._id, oracularSpectacular._id, whiteBloodCells._id, theBlueAlbum._id, twentyOne._id, planetHer._id, ladiesAndGentlemenTheBestOfGeorgeMichael, songsFromTheBigChair._id, comeAwayWithMe._id]
        },
        {
            name: 'metal',
            albums: [theGereg._id, takasagoArmy._id]
        },
        {
            name: 'punk',
            albums: [badBrains.id, sublime._id]
        },
        {
            name: 'soul',
            albums: [backToBlack._id,theMiseducationofLaurynHill._id, SongsInAMinor._id, diamondLife._id, blackPumas._id, justAsIAm._id, soundAndColor._id]
        },
        {
            name: 'disco',
            albums: [theBestOfEarthWindAndFireVolumeOne._id, discovery._id]
        },
        {
            name: 'r and b',
            albums: [blonde._id, channelOrange._id,  isolation._id, awakenMyLove._id, theBestOfEarthWindAndFireVolumeOne._id]
        },
        {
            name: 'reggae',
            albums: [legend._id, theYouthOfToday._id]
        },
        {
            name: 'etc.',
            albums: [live._id, elwan._id, nightflightToVenus._id]
        },

    ]
    await Genre.deleteMany({})
    await Genre.insertMany(genres)
    console.log('created genres')
}

const run = async () => {
    await main()
    db.close()
}

run()