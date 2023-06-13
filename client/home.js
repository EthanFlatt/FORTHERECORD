/*----- constants  -----*/

const backgroundPictures = [
    "url(https://aymag.com/wp-content/uploads/2019/05/yawpers.jpg')",
]

/*----- state variables -----*/

/*----- cached elements  -----*/

const searchBar = document.getElementById = ('searchBar')
const searchButton = document.getElementById = ('searchButton')

/*----- event listeners  -----*/

searchButton.addeventlistener('click', )

/*----- functions  -----*/

const chooseImage = () => {
    const image = Math.floor(Math.random() * backgroundPictures.length)
    document.body.style.backgroundImage = image
}

chooseImage()

const search = async () => {
    let response = await axios.get('http://localhost:3001/')
    if (searchBar.value = bandname) {

    } 
}