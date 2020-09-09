
const apiKey = "eccae21236f50571310ed5eb92155abe"

let baseImageURL = "https://image.tmdb.org/t/p/w185";

fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=2`)
    .then(response => response.json())
    .then(movies => handle(movies))


function handle(movies) {
    movies.results.map(movie => render(movie)) 
}

const movieList = document.querySelector("#main-page")

function render(movie) {   
    const title = document.createElement("h2")
    title.innerText = movie.title
    title.className = "overview"

    const rating = document.createElement("h3")
    rating.innerText = movie.vote_average
    rating.className = "rating"

    const space1 = document.createElement("br")
    const space2 = document.createElement("br")

    const year = document.createElement("div")
    year.innerText = `Release Date: ${movie.release_date}`
    year.className = "overview"

    const image = document.createElement("div")
    image.innerHTML = `<a href="movie.html?id=${movie.id}"><img src="${baseImageURL}${movie.poster_path}"></a>`
    image.className = "image"

    // const backdrop = document.createElement("div")
    // backdrop.innerHTML = `<img src="https://image.tmdb.org/t/p/w185${movie.backdrop_path}">`

    const plot = document.createElement("div")
    plot.innerText = movie.overview
    plot.className = "overview"

    console.log(image)
    movieList.append(title, rating, image, year, space1, plot, space2)
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

