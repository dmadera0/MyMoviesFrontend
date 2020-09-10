console.log("All Movies")

fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(movies => {
        const movieList = document.querySelector('#movies')
        
        movies.forEach(movies => {
            const movieElement = document.createElement('li')

            movieElement.innerHTML = name

            movieList.appendChild(movieElement)
        })
    })