const queryParams = new URLSearchParams(window.location.search)
const user_id = queryParams.get("user_id")

let baseImageURL = "https://image.tmdb.org/t/p/w185";

const main = document.querySelector('#user-feild')

fetch(`http://localhost:3000/users/${user_id}`)
   .then (response => response.json())
   .then(user => handle(user))
    
function handle(user) {
    
    const h1 = document.createElement('h1')
    h1.textContent = `Welcome ${user.name}!`
    

    const h3 = document.createElement('h3')
    h3.textContent = "Your Favorite Movies!"
    main.append(h1, h3) 

    user.movies.map(movie=> render(movie))
}

function render(movie) {
    const li = document.createElement("li")
    li.textContent = movie.title
    main.appendChild(li)
 }


fetch("http://localhost:3000/favorites")
   .then (response => response.json())
   .then(favorites => handleF(favorites))

function handleF(favorites) {
    favorites.map(favorite => renderMovie(favorite)) 
}

const ul = document.createElement('ul')

// function renderF(favorite) {

    fetch("http://localhost:3000/movies")
        .then (response => response.json())
        .then(movies => handleM(movies))

    function handleM(movies) {
        movies.map(movie => renderMovie(movie)) 
    }



const FavMovie = document.querySelector(".wrapper")
function renderMovie(movie) {
  
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    div2.className = "content"
    div2.innerHTML = `<form method="POST" action="http://localhost:3000/favorites?user_id=${user_id}&movie_id=${movie.id}">
                <input id="button" type="submit" value="Add this movie to your collection!"><a href="movie.html?id=${movie.id}"><img id="image" src=${baseImageURL}${movie.image}>${movie.title}</input>
                </form>`
    
    div1.appendChild(div2)
    FavMovie.appendChild(div1)
}