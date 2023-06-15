document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('search'); 
    document.getElementById('searchBar').value = myParam  
    getData(myParam)
    }, false);

const searchBar = document.getElementById('searchBar')
const searchButton = document.getElementById('searchButton')

const albumName = document.getElementById('albumName')
const albumPrice = document.getElementById('albumPrice')
const albumBand = document.getElementById('albumBand')
const albumImage = document.getElementById('albumImage')
const albumAddToCart = document.getElementById('albumAddToCart')

searchButton.addEventListener('click', search)

function search() {
    window.location.href = `searchQuery.html?search=${searchBar.value}`
}

const getData = async (myParam) => {
   const foundData = await axios.get(`http://localhost:3001/api/albums?search=${myParam}`)
   console.log(foundData)
   albumName.innerText = foundData.data[0].name
   albumPrice.innerText = foundData.data[0].price
   albumBand.innerText = foundData.data[0].band
   albumImage.src = foundData.data[0].image
}


