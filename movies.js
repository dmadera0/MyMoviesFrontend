let baseImageURL = "https://image.tmdb.org/t/p/w185";

fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(movies => render(movies))
        
        
const movieList = document.querySelector(".wrapper")

function render(movies) {
    movies.forEach(movie => {
        const movieElement = document.createElement('div')
        movieElement.innerHTML = `<a href="movie.html?id=${movie.id}"><img src="${baseImageURL}${movie.image}"></a>`
        
        const title = document.createElement('div')
        title.innerText = movie.title
        title.className = "text"

        movieElement.appendChild(title)
        movieList.appendChild(movieElement)
    })
}



// function four() {
//     for (i = 0; i < movieList.length; i++) {
//       movieList[i].style.flex = "25%";
//     }
// }