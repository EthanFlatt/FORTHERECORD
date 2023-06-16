const db = require('../db')
const { Band, Album } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {

    const tylerTheCreator = await Band.findOne({name: 'Tyler the Creator'})
    const nirvana = await Band.findOne({name: 'Nirvana'})
    const tameImpala = await Band.findOne({name: 'Tame Impala'})
    const frankOcean = await Band.findOne({name: 'Frank Ocean'})
    const depecheMode = await Band.findOne({name: 'Depeche Mode'})
    const modestMouse = await Band.findOne({name: 'Modest Mouse'})
    const kanyeWest= await Band.findOne({name: 'Kanye West'})
    const abba = await Band.findOne({name: 'ABBA'})
    const gorillaz = await Band.findOne({name: 'Gorillaz'})
    const mgmt = await Band.findOne({name: 'MGMT'})
    const theWhiteStripes = await Band.findOne({name: 'The White Stripes'})
    const kendrickLamar = await Band.findOne({name: 'Kendrick Lamar'})
    const yg = await Band.findOne({name: 'YG'})
    const amyWinehouse = await Band.findOne({name: 'Amy Winehouse'})
    const weezer = await Band.findOne({name: 'Weezer'})
    const blackKeys = await Band.findOne({name: 'Black Keys'})
    const myChemicalRomance = await Band.findOne({name: 'My Chemical Romance'})
    const theStrokes = await Band.findOne({name: 'The Strokes'})
    const theKillers = await Band.findOne({name: 'The Killers'})
    const theBeatles = await Band.findOne({name: 'The Beatles'})
    const fooFighters = await Band.findOne({name: 'Foo Fighters'})
    const kingGizzardAndtheLizardWizard= await Band.findOne({name: 'King Gizzard & the Lizard Wizard'})
    const thePolice = await Band.findOne({name: 'The Police'})
    const felaKuti = await Band.findOne({name: 'Fela Kuti'})
    const aliciaKeys = await Band.findOne({name: 'Alicia Keys'})
    const adele = await Band.findOne({name: 'Adele'})
    const kaliUchis = await Band.findOne({name: 'Kali Uchis'})
    const sade = await Band.findOne({name: 'Sade'})
    const fugees = await Band.findOne({name: 'Fugees'})
    const laurynHill = await Band.findOne({name: 'Lauryn Hill'})
    const aTribeCalledQuest = await Band.findOne({name: 'A Tribe Called Quest'})
    const badBrains = await Band.findOne({name: 'Bad Brains'})
    const theHu = await Band.findOne({name: 'The Hu'})
    const mdouMoctar = await Band.findOne({name: 'Mdou Moctar'})
    const tinariwen = await Band.findOne({name: 'Tinariwen'})
    const macDeMarco = await Band.findOne({name: 'Mac DeMarco'})
    const childishGambino = await Band.findOne({name: 'Childish Gambino'})
    const maroon5 = await Band.findOne({name: 'Maroon 5'})
    const bobMarley= await Band.findOne({name: 'Bob Marley'})
    const mfDoom = await Band.findOne({name: 'MF DOOM'})
    const earthWindAndFire = await Band.findOne({name: 'Earth, Wind & Fire'})
    const outkast = await Band.findOne({name: 'Outkast'})
    const Khruangbin = await Band.findOne({name: 'Khruangbin'})
    const chthonic = await Band.findOne({name: 'Chthonic'})
    const daftPunk = await Band.findOne({name: 'Daft Punk'})
    const musicalYouth = await Band.findOne({name: 'Musical Youth'})
    const blackPumas = await Band.findOne({name: 'Black Pumas'})
    const theRoots = await Band.findOne({name: 'The Roots'})
    const garyClarkJr = await Band.findOne({name: 'Gary Clark Jr.'})
    const dojaCat = await Band.findOne({name: 'Doja Cat'})
    const sublime = await Band.findOne({name: 'Sublime'})
    const santana = await Band.findOne({name: 'Santana'})
    const georgeMichael = await Band.findOne({name: 'George Michael'})
    const tearsForFears = await Band.findOne({name: 'Tears For Fears'})
    const boneyM = await Band.findOne({name: 'Boney M.'})
    const billWithers = await Band.findOne({name: 'Bill Withers'})
    const tupac = await Band.findOne({name: 'Tupac'})
    const theNotoriousBIG = await Band.findOne({name: 'The Notorious B.I.G.'})
    const theAlanParsonsProject = await Band.findOne({name: 'The Alan Parsons Project'})
    const radiohead = await Band.findOne({name: 'Radiohead'})
    const norahJones = await Band.findOne({name: 'Norah Jones'})
    const isaiahRashad = await Band.findOne({name: 'Isaiah Rashad'})
    const alabamaShakes = await Band.findOne({name: 'Alabama Shakes'})

    const albums = [

        {
            name: 'Flower Boy',
            band: tylerTheCreator._id,
            priceInDollars: 25,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Tyler%2C_the_Creator_-_Flower_Boy.png/220px-Tyler%2C_the_Creator_-_Flower_Boy.png'
        },
        {
            name: 'MTV Unplugged In New York (Live Acoustic)',
            band: nirvana._id,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/54/Nirvana_mtv_unplugged_in_new_york.png/220px-Nirvana_mtv_unplugged_in_new_york.png'
        },
        {
            name: 'Currents',
            band: tameImpala._id,
            priceInDollars: 25,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9b/Tame_Impala_-_Currents.png/220px-Tame_Impala_-_Currents.png'
        },
        {
            name: 'Blonde',
            band: frankOcean._id,
            priceInDollars: 25,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Blonde_-_Frank_Ocean.jpeg/220px-Blonde_-_Frank_Ocean.jpeg'
        },
        {
            name: 'Channel Orange',
            band: frankOcean._id,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Channel_ORANGE.jpg/220px-Channel_ORANGE.jpg'
        },
        {
            name: 'Violator',
            band:  depecheMode._id,
            priceInDollars: 15,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/92/Depeche_Mode_-_Violator.png/220px-Depeche_Mode_-_Violator.png'
        },
        {
            name: 'Good News for People Who Love Bad News',
            band: modestMouse._id,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/a/aa/MMGoodNews5075.jpg'
        },
        {
            name: 'We Were Dead Before the Ship Even Sank',
            band: modestMouse._id,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Modest_mouse_2007_album.jpg'
        },
        {
            name: 'The College Dropout',
            band: kanyeWest._id,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Kanyewest_collegedropout.jpg'

        },
        {
            name: 'Late Registration',
            band: kanyeWest._id,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f4/Late_registration_cd_cover.jpg/220px-Late_registration_cd_cover.jpg'

        },
        {
            name: 'Graduation',
            band: kanyeWest._id,
            priceInDollars: 25,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Graduation_%28album%29.jpg/220px-Graduation_%28album%29.jpg'
        },
        {
            name: 'ABBA Gold',
            band: abba._id,
            priceInDollars: 30,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/30/ABBA_Gold_cover.png/220px-ABBA_Gold_cover.png'
        },
        {
            name: "Gorillaz",
            band: gorillaz._id,
            priceInDollars: 25,
            image: 'https://upload.wikimedia.org/wikipedia/en/4/41/GorillazAlbum.jpg'
        },
        {
            name: 'Demon Days',
            band: gorillaz._id,
            priceInDollars: 25,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/df/Gorillaz_Demon_Days.PNG/220px-Gorillaz_Demon_Days.PNG'
        },
        {
            name: 'Oracular Spectacular',
            band: mgmt._id,
            priceInDollars: 25,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/83/Oracular_Spectacular_2008.jpg/220px-Oracular_Spectacular_2008.jpg'
        },
        {
            name: 'White Blood Cells',
            band: theWhiteStripes._id,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/1/12/The_White_Stripes_-_White_Blood_Cells.jpg'
        },
        {
            name: 'To Pimp a Butterfly',
            band: kendrickLamar._id,
            priceInDollars: 30,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Kendrick_Lamar_-_To_Pimp_a_Butterfly.png/220px-Kendrick_Lamar_-_To_Pimp_a_Butterfly.png'
        },
        {
            name: 'Still Brazy',
            band: yg._id,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d7/Ygstillbrazycover.jpeg/220px-Ygstillbrazycover.jpeg'
        },
        {
            name: 'Back to Black',
            band: amyWinehouse._id,
            priceInDollars: 30,
            image: 'https://upload.wikimedia.org/wikipedia/en/6/67/Amy_Winehouse_-_Back_to_Black_%28album%29.png'
        },
        {
            name: 'The Blue Album',
            band: weezer._id,
            priceInDollars: 15,
            image: 'https://upload.wikimedia.org/wikipedia/en/7/70/Weezer_-_Blue_Album.png'
        },
        {
            name: 'Brothers',
            band: blackKeys._id,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/93/The_Black_Keys_-_Brothers.jpg/220px-The_Black_Keys_-_Brothers.jpg'
        },
        {
            name: 'The Black Parade',
            band: myChemicalRomance._id,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ea/Blackparadecover.jpg/220px-Blackparadecover.jpg'
        },
        {
            name: 'Room on Fire',
            band: theStrokes._id,
            priceInDollars: 15,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Room_on_Fire_cover.jpg/220px-Room_on_Fire_cover.jpg'
        },
        {
            name: 'Hot Fuss',
            band: theKillers,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/The_Killers_-_Hot_Fuss.png/220px-The_Killers_-_Hot_Fuss.png'
        },
        {
            name: "Sgt. Pepper's Lonely Hearts Club band",
            band: theBeatles._id,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/5/50/Sgt._Pepper%27s_Lonely_Hearts_Club_Band.jpg'

        },
        {
            name: 'The Colour and the Shape',
            band: fooFighters._id,
            priceInDollars: 25,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0d/FooFighters-TheColourAndTheShape.jpg/220px-FooFighters-TheColourAndTheShape.jpg'
        },
        {
            name: 'Flying Microtonal Banana',
            band: kingGizzardAndtheLizardWizard._id,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/4/49/Flying_Microtonal_Banana.jpg'
        },
        {
            name: "Outlandos d'amour",
            band: thePolice._id,
            priceInDollars: 15,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Police-album-outlandosdamour.jpg/220px-Police-album-outlandosdamour.jpg'
        },
        {
            name: 'Live!',
            band: felaKuti._id,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5b/Fela_Kuti_Live.jpg/220px-Fela_Kuti_Live.jpg'
        },
        {
            name: 'Songs in A Minor',
            band: aliciaKeys._id,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/83/AliciaKeys-SongsInAMinor-music-album.jpg/220px-AliciaKeys-SongsInAMinor-music-album.jpg'
        },
        {
            name: '21',
            band: adele._id,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Adele_-_21.png/220px-Adele_-_21.png'
        },
        {
            name: 'Isolation',
            band: kaliUchis._id,
            priceInDollars: 25,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Kali_Uchis_-_Isolation.png/220px-Kali_Uchis_-_Isolation.png'
        },
        {
            name: 'Diamond Life',
            band: sade._id,
            priceInDollars: 25,
            image: 'https://upload.wikimedia.org/wikipedia/en/6/69/Sade_-_Diamond_Life.png'
        },
        {
            name: 'The Score',
            band: fugees._id,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/d/df/Fugees_-_The_Score.png'
        },
        {
            name: 'The Miseducation of Lauryn Hill',
            band: laurynHill._id,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/55/LaurynHillTheMiseducationofLaurynHillalbumcover.jpg/220px-LaurynHillTheMiseducationofLaurynHillalbumcover.jpg'
        },
        {
            name: 'The Low End Theory',
            band: aTribeCalledQuest._id,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/42/ATribeCalledQuestTheLowEndtheory.jpg/220px-ATribeCalledQuestTheLowEndtheory.jpg'
        },
        {
            name: 'Bad Brains',
            band: badBrains._id,
            priceInDollars: 15,
            image: 'https://upload.wikimedia.org/wikipedia/en/5/58/Bad_Brains_debut.jpg'
        },
        {
            name: 'The Gereg',
            band: theHu._id,
            priceInDollars: 30,
            image: 'https://upload.wikimedia.org/wikipedia/en/6/68/The_Hu_-_The_Gereg.png'
        },
        {
            name: 'Afrique Victime',
            band: mdouMoctar._id,
            priceInDollars: 25,
            image: 'https://upload.wikimedia.org/wikipedia/en/9/94/Mdou_Moctar_-_Afrique_Victime.png'
        },
        {
            name: 'Elwan',
            band: tinariwen._id,
            priceInDollars: 30,
            image: 'https://upload.wikimedia.org/wikipedia/en/6/66/Tinariwen_Elwan.jpg'
        },
        {
            name: 'Salad Days',
            band: macDeMarco._id,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/8/81/MacDeMarcoSaladDays.png'
        },
        {
            name: 'Awaken, My Love!',
            band: childishGambino._id,
            priceInDollars: 30,
            image: 'https://upload.wikimedia.org/wikipedia/en/1/10/Childish_Gambino_-_Awaken%2C_My_Love%21.png'
        },
        {
            name: 'Songs About Jane',
            band: maroon5._id,
            priceInDollars: 25,
            image: 'https://upload.wikimedia.org/wikipedia/en/b/be/Maroon_5_-_Songs_About_Jane.png'
        },
        {
            name: 'Legend',
            band: bobMarley._id,
            priceInDollars: 25,
            image: 'https://upload.wikimedia.org/wikipedia/en/c/c2/BobMarley-Legend.jpg'
        },
        {
            name: 'Mm..Food',
            band: mfDoom._id,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/8/8a/Mmfood.jpg'
        },
        {
            name: 'The Best of Earth, Wind & Fire, Vol. 1',
            band: earthWindAndFire._id,
            priceInDollars: 25,
            image: 'https://upload.wikimedia.org/wikipedia/en/9/95/BestofEarthWind%26Fire.jpg'
        },
        {
            name: 'Stankonia',
            band: outkast._id,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0b/OutKast_-_Stankonia.JPG/220px-OutKast_-_Stankonia.JPG'
        },
        {
            name: 'Con Todo el Mundo',
            band: Khruangbin._id,
            priceInDollars: 30,
            image: 'https://upload.wikimedia.org/wikipedia/en/9/94/Khruangbin_Con_Todo_El_Mundo_Cover.png'
        },
        {
            name: 'Takasago Army',
            band: chthonic._id,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/7/77/Takasago_Army_album_cover.jpg'
        },
        {
            name: 'Discovery',
            band: daftPunk._id,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/2/27/Daft_Punk_-_Discovery.png'
        },
        {
            name: 'The Youth of Today',
            band: musicalYouth._id,
            priceInDollars: 15,
            image: 'https://upload.wikimedia.org/wikipedia/en/d/de/Musical_youth_-_the_youth_of_today.jpg'
        },
        {
            name: 'Black Pumas',
            band: blackPumas._id,
            priceInDollars: 25,
            image: 'https://upload.wikimedia.org/wikipedia/en/4/40/Black_Pumas_-_Black_Pumas.png'
        },
        {
            name: 'Things Fall Apart',
            band: theRoots.id,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/3/30/Things_Fall_Apart_41172.jpg'
        },
        {
            name: 'The Story of Sonny Boy Slim',
            band: garyClarkJr._id,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/f/fb/The_Story_of_Sonny_Boy_Slim.jpg'
        },
        {
            name: 'Planet Her',
            band: dojaCat._id,
            priceInDollars: 30,
            image: 'https://upload.wikimedia.org/wikipedia/en/6/61/Doja_Cat_-_Planet_Her.png'
        },
        {
            name: 'Sublime',
            band: sublime._id,
            priceInDollars: 25,
            image: 'https://upload.wikimedia.org/wikipedia/en/9/94/Sublime_Self-Titled.jpg'
        },
        {
            name: 'Supernatural',
            band: santana,
            priceInDollars: 30,
            image: 'https://upload.wikimedia.org/wikipedia/en/7/7f/Santana_-_Supernatural_-_CD_album_cover.jpg'
        },
        {
            name: 'Ladies and Gentlemen: The Best of George Michael',
            band: georgeMichael._id,
            priceInDollars: 30,
            image: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Ladies_%26_Gentlemen_%28Cover%29.jpg'
        },
        {
            name: 'Songs from the Big Chair',
            band: tearsForFears._id,
            priceInDollars: 25,
            image: 'https://upload.wikimedia.org/wikipedia/en/f/f5/Tears_for_Fears_Songs_from_the_Big_Chair.jpg'
        },
        {
            name: 'Nightflight to Venus',
            band: boneyM._id,
            priceInDollars: 30,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Boney_M._-_Nightflight_To_Venus.jpg/220px-Boney_M._-_Nightflight_To_Venus.jpg'
        },
        {
            name: 'Just As I Am',
            band: billWithers._id,
            priceInDollars: 15,
            image: 'https://upload.wikimedia.org/wikipedia/en/2/2a/Withers-justasiamcoverart.JPG'
        },
        {
            name: 'All Eyez on Me',
            band: tupac._id,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/1/16/Alleyezonme.jpg'
        },
        {
            name: 'Life After Death',
            band: theNotoriousBIG._id,
            priceInDollars: 30,
            image: 'https://upload.wikimedia.org/wikipedia/en/1/1c/NotoriousB.I.G.LifeAfterDeath.jpg'
        },
        {
            name: 'Eye in the Sky',
            band: theAlanParsonsProject._id,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/e/e9/TheAlanParsonsProject-EyeintheSky.jpg'
        },
        {
            name: 'OK Computer',
            band: radiohead._id,
            priceInDollars: 25,
            image: 'https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png'
        },
        {
            name: 'Come Away with Me',
            band: norahJones._id,
            priceInDollars: 20,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Norah_Jones_-_Come_Away_With_Me.jpg/220px-Norah_Jones_-_Come_Away_With_Me.jpg'
        },
        {
            name: 'The Suns Tirade',
            band: isaiahRashad._id,
            priceInDollars: 25,
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/00/TheSunsTirade.jpeg/220px-TheSunsTirade.jpeg'
        },
        {
            name: 'Sound and Color',
            band: alabamaShakes._id,
            priceInDollars: 25,
            image: 'https://upload.wikimedia.org/wikipedia/en/2/2d/Alabama_Shakes_-_Sound_%26_Color_album_cover.jpg'
        }
        
    ]
    await Album.deleteMany({})
    await Album.insertMany(albums)
    console.log('albums created.')
}

const run = async () => {
    await main()
    db.close()
}

run()