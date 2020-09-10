let baseImageURL = "https://image.tmdb.org/t/p/w185";

fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(movies => handle(movies))


function handle(movies) {
    movies.map(movie => render(movie)) 
}

const movieList = document.querySelector("#main-page")

function render(movie) {   
    const title = document.createElement("div")
    title.innerText = movie.title
    title.className = "overview"
    
    const space1 = document.createElement("br")
    const space2 = document.createElement("br")
    
    const image = document.createElement("div")
    image.innerHTML = `<a href="movie.html?id=${movie.id}"><img src="${baseImageURL}${movie.image}"></a>`
    image.className = "image"
    
    image.appendChild(title)
    movieList.append(image, space1)
}


fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => createUserOptions(users))

function createUserOptions(users) {
    const userField = document.querySelector('#username-field')
    
    users.map(user => {
        const userOption = document.createElement('option')
        
        userOption.value = user.id
        userOption.textContent = user.name
        
        userField.appendChild(userOption)
    })
}


// function seeAllMovies {
    //     const h3 = document.createElement("h3")
    //     h3.innerHTML = <a href="movies.html">See All Movies</a>
    
    // }
    
// const apiKey = "eccae21236f50571310ed5eb92155abe"