import { fetchMovieDetails } from '../components/getMovieDetails';

export const DetailView = (props) => {
    const { id } = props; //Aquí se define props como un objeto que contiene las propiedades pasadas al componente.
   //el destructuring const { id } = props; está extrayendo la propiedad id del objeto props.
   //se extrae con la finalidad de solo quedarse con esa propiedad entre todas las que hay y usarla, en este caso en la solicitud de la api.


    const html = document.createElement('div');
    html.id = 'detail-view';
    fetchMovieDetails(id, (data) => {
        const movieTitle = document.createElement('h1'); //se crea el título de la peli
        movieTitle.textContent = data.title;
    
        const movieOverview = document.createElement('p'); //se crea la descripción general
        movieOverview.textContent = data.overview;
    
        const movieReleaseDate = document.createElement('p'); //se crea la fecha de lanzamiento
        movieReleaseDate.textContent = `Release Date: ${data.release_date}`;
    
        const moviePoster = document.createElement('img'); //se crea el poster de la peli
        moviePoster.src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
        moviePoster.alt = data.title;
    
        html.appendChild(movieTitle); //se agregan los elementos a la estructura 
        html.appendChild(movieOverview);
        html.appendChild(movieReleaseDate);
        html.appendChild(moviePoster);
    });
    
    return html;

}
