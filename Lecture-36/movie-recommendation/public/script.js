const searchInput = document.getElementById('searchInput');


async function getAllMovies(searchText) {
    const res = await fetch(`http://localhost:3000/search?q=${searchText}`);
    const data = await res.json();
    console.log(data);
}


searchInput.addEventListener('keyup', () => {
    const searchText = searchInput.value;
    getAllMovies(searchText);
})