console.log("Entro a GetRequest");
document.addEventListener("DOMContentLoaded", function() {

  const movieSection = document.getElementById("pelis");
  const movies = [];

  function loadMovieList() {
    console.log("Entro a loadMovieList");
    fetch("/pelis24114/movies?action=getAll")
      .then(response => response.json())
      .then(data => {
        console.log("data : "+data);
        data.forEach(movie =>{
          movies.push(movie);
          movieSection.innerHTML += `
            <tr>
              <td>${movie.nombre}</td>
              <td>${movie.descripcion}</td>
              <td>${movie.genero}</td>
              <td>${movie.calificacion}</td>
            </tr>
          `
        });
      });
  }
  loadMovieList();
});