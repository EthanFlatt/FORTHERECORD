/*----- constants  -----*/

/*----- state variables -----*/

/*----- cached elements  -----*/

const searchBar = document.getElementById('searchBar')
const searchButton = document.getElementById('searchButton')

/*----- event listeners  -----*/

searchButton.addEventListener('click', search)

function search() {
    window.location.href = `searchQuery.html?search=${searchBar.value}`
}


