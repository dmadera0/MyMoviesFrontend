const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get("id")

let baseImageURL = "https://image.tmdb.org/t/p/w185";

 fetch(`http://localhost:3000/movies/${id}`)
   .then (response => response.json())
    .then(movie =>{
        const title = document.createElement('h1')
        const image = document.createElement('div')
        const year = document.createElement('div')
        const plot = document.createElement('div')
        const rating = document.createElement('div')

        title.textContent = movie.title
        year.textContent = movie.year
        plot.textContent = movie.plot
        rating.textContent = movie.rating
        image.innerHTML = `<a href="movie.html?id=${movie.id}"><img src="${baseImageURL}${movie.poster_path}"></a>`

        document.body.append(title,image,year,plot,rating,)


    })