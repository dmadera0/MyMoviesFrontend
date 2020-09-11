# MyMoviesFrontend
# MyMovies App
 A great place to view and orginize all your favorite movies
# Table of contents
* [General Info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)
* [Contact](#contact)
## General Info
MyMovies is a full-stack application that allows user to browse a library of over 3000 movies. The user can adds movies to their favorites, and get general info about any movie in the library, including release date, and plot.

Grab some popcorn and enjoy the show!

![scrolling](scrolling movie gif)

# Intro Video

# Technologies
* Ruby - version 2.6.1
* ActiveRecord - version
* Rails API version 6.0.3
* Rake - version 13.0
* Sinatra-activerecord - version 2.0
* SQLite3 - version 1.4
* JSON - version 2.3
* Rest-Client - version 2.1
* HTML 5
* CSS
* JavaScript


## Setup

1.  Clone both the [backend repository](https://github.com/dmadera0/MyMovies) and [frontend repository](https://github.com/dmadera0/MyMoviesFrontend) locally to your computer.
2. in the command line, navigate to the root directory and run: $bundle install$, $rails db:migrate$, $rails db:seed$.
3. In command line of the backend directoy, run: $rails s$ this will start the backend server
4. switch over to your frontend directory, run: $npx lite-server$ this will open a web browser with the application.


## Code Examples
```javascript
let baseImageURL = "https://image.tmdb.org/t/p/w185";

fetch(`http://localhost:3000/movies/${id}`)
  .then (response => response.json())
  .then(movie => render(movie)) 


const movieNode = document.querySelector("#movie")

function render(movie) {
  const title = document.createElement('h1')
  title.textContent = movie.title

  const image = document.createElement('div')
  image.innerHTML = `<a href="movie.html?id=${movie.id}"><img src="${baseImageURL}${movie.image}"></a>`
  image.className = "image"
  ```
## Features
* Movie Library of 3000 films
* Interactive design
* Creation of a favorites page, where users can store there favorite films
* Get general info about any Movie
## Status

## Inspiration
The inspiration for this project came from a love of movies. The app allows user to have a currated list of all their favorite Moives and films. These lists can be viewed by all the apps users, to allow for recomendantion and shared interest.

## Contact
Created by [Sanjeev Yogi](https://www.linkedin.com/in/sanjeevyogi/) and [Daniel Madera](https://www.linkedin.com/in/daniel-madera-925b4987/)

Please feel free to contact us!



