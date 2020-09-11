let baseImageURL = "https://image.tmdb.org/t/p/w185";

const searchParams = new URLSearchParams(window.location.search)
const search = searchParams.get("search")


const id = searchParams.get("id")

baseURL = "http://localhost:3000";
movieURL = `${baseURL}/movies`;


if (search) {
    movieURL = `${movieURL}?search=${search}`;
}

fetch(movieURL)
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
    .then(users => createUserLink(users))
    

    function createUserLink(users) {
        // const userField = document.querySelector('#username-field')
        const nav = document.querySelector("#user-form")
    
    users.map(user => {
        const userLink = document.createElement('div')
        userLink.value = user.id
        userLink.innerText = user.password
        userLink.innerText = user.name
        userLink.innerHTML = `<a href="user.html?user_id=${user.id}">${user.name}</a>`
        
        // nav.appendChild(userLink)
    })
}

    
// const apiKey = "eccae21236f50571310ed5eb92155abe"