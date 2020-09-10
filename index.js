
const apiKey = "eccae21236f50571310ed5eb92155abe"

let baseImageURL = "https://image.tmdb.org/t/p/w185";

// `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=2`

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
    console.log(movie.title)
    title.className = "overview"

    // const rating = document.createElement("h3")
    // rating.innerText = movie.rating
    // rating.className = "rating"

    const space1 = document.createElement("br")
    // const space2 = document.createElement("br")

    // const releaseDate = document.createElement("div")
    // releaseDate.innerText = `Release Date: ${movie.year}`
    // releaseDate.className = "overview"

    const image = document.createElement("div")
    image.innerHTML = `<a href="movie.html?id=${movie.id}"><img src="${baseImageURL}${movie.image}"></a>`
    image.className = "image"

    image.appendChild(title)

    // const plot = document.createElement("div")
    // plot.innerText = movie.plot
    // plot.className = "overview"

    // console.log(image)
    movieList.append(image, space1 )
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

