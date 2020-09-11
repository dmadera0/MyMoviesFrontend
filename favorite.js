const searchParams = new URLSearchParams(window.location.search)
const id = searchParams.get("id")

fetch(`http://localhost:3000/favorite/${id}`)
.then(response => response.json())
.then(movies =>{
    

})