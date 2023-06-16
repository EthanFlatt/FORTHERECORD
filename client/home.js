const searchBar = document.getElementById('searchBar')
const searchButton = document.getElementById('searchButton')

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


