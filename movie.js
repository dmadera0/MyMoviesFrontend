const queryParams = new URLSearchParams(window.location.search)
const id = queryParams.get("id")

let baseImageURL = "https://image.tmdb.org/t/p/w185";

fetch(`http://localhost:3000/movies/${id}`)
  .then (response => response.json())
  .then(movie => render(movie)) 


const movieNode = document.querySelector("#movie")

function render(movie) {
  const title = document.createElement('h3')
  title.textContent = movie.title

  const image = document.createElement('div')
  image.innerHTML = `<a href="movie.html?id=${movie.id}"><img src="${baseImageURL}${movie.image}"></a>`
  image.className = "image"

  const year = document.createElement('div')
  year.textContent = `Release Date: ${movie.year}`
  year.className = "release-date"

  const plot = document.createElement('div')
  plot.textContent = movie.plot
  plot.className = "plot-field"

  const rating = document.createElement('div')
  rating.innerHTML= `<img src="favorite.png" width="30" height=auto >${movie.rating}</img>`
  rating.className = "rating"

  movieNode.append(title, rating, image, year, plot)
}