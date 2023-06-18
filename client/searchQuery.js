document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('search'); 
    document.getElementById('searchBar').value = myParam  
    getData(myParam)
    searchBar.value = ''
    }, false);

const searchBar = document.getElementById('searchBar')
const searchButton = document.getElementById('searchButton')

const albumName = document.getElementById('albumName')
const albumPrice = document.getElementById('albumPrice')
const albumBand = document.getElementById('albumBand')
const albumImage = document.getElementById('albumImage')
const albumAddToCart = document.getElementById('albumAddToCart')
const albumDisplay = document.querySelector('.albumDisplay')



searchButton.addEventListener('click', search)
searchBar.addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
        e.preventDefault()
        search()
    }   
})

function search() {
    window.location.href = `searchQuery.html?search=${searchBar.value}`
}

const getData = async (myParam) => {
   let url = 'http://localhost:3001/api/albums'
   if (myParam) url += `?search=${myParam}`
   const foundData = await axios.get(url)
   console.log(foundData)

   let albumsArray = foundData.data 
        albumsArray.forEach((album) => {
        if (album.band === null) {
            albumDisplay.innerHTML += `
            <h2 class='albumName'>${album.name}</h2>
            <img class="albumImage" src = '${album.image}'>
            <h2><button class='albumAddToCart'>Add to cart</button> <span class='albumPrice'>$${album.priceInDollars}</span> </h2>`
        } else {
            albumDisplay.innerHTML += `<h3 class='albumBand'>${album.band.name}</h3>
            <h2 class='albumName'>${album.name}</h2>
            <img class="albumImage" src = '${album.image}'>
            <h2><button class='albumAddToCart'>Add to cart</button> <span class='albumPrice'>$${album.priceInDollars}</span> </h2>`
        }
      })  

   

   albumName.innerText = foundData.data[album].name
   albumPrice.innerText = foundData.data[album].priceInDollars
   albumBand.innerText = foundData.data[album].band.name
   albumImage.src = foundData.data[album].image
}


// add event listener to button to run function so respective album can be added to cart
// make function that takes respective album and adds it to cart
// albumAddToCart.addEventListener('click', )


