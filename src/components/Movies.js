//procesar esos datos de la promesa y generar elementos del DOM para mostrarlos
import dataResult from '../lib/getMovies'; // Adjust the path as necessary
import {detailsResult} from '../lib/getMovies';
//import { showMovieDetails } from './Detail.js'; // Adjust the path as necessary
import { navigateTo } from '../router.js';
// importar la funcion navigateTo
console.log(dataResult().then(result=> console.log(result.results)));
console.log(detailsResult());

const Movies = (div,filter = {}) => {
const ul = document.createElement('ul')
console.log('filtro', filter)
return dataResult().then(result => {
    //console.log('filtro',result.results.year);
    let arrayMoviesList = result.results;

    console.log(arrayMoviesList); //aca tengo en un array la info de las peliculas sobre esto debo trabajar
    //console.log('Películas:', arrayMoviesList);
        // Apply filter if provided
if (filter.year && filter.year !== 'all') { //condicion que no sea igual a todo el resultado guardado en arrayMovieList
arrayMoviesList = arrayMoviesList.filter(movie => movie.release_date && movie.release_date.startsWith(String(filter.year)));     
}

if (filter.title && filter.title === 'name-asc') {
    arrayMoviesList.sort((a, b) => {
        if (a.original_title < b.original_title) {
            return -1;
        }
        if (a.original_title > b.original_title) {
            return 1;
        }
        return 0;
    });
} else if (filter.title && filter.title === 'name-desc') {
    arrayMoviesList.sort((a, b) => {
        if (a.original_title < b.original_title) {
            return 1;
        }
        if (a.original_title > b.original_title) {
            return -1;
        }
        return 0;
    });
}

arrayMoviesList.forEach(item => {
const liElement = document.createElement('li');
    liElement.classList.add('card');

const originTitle = document.createElement('h2');
    originTitle.textContent = item.original_title;

const newImage = document.createElement('img');
    newImage.src = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
    newImage.alt = item.original_title;
    newImage.classList.add('poster');

const year = document.createElement('p');
    year.textContent = item.release_date;

const detailButton = document.createElement('button');
    detailButton.textContent = 'Ver Detalles';
          //  detailButton.addEventListener('click', () => showMovieDetails(item.id));
    detailButton.addEventListener('click', () => navigateTo('/detail', { id: item.id }));//este boton contiene la ruta de navegación creado con el evento del DOM

    liElement.appendChild(originTitle);
    liElement.appendChild(newImage);
    liElement.appendChild(year);
    liElement.appendChild(detailButton);
    ul.appendChild(liElement);
});
return ul;

}).catch(error => {
    console.error('Error fetching movies:', error);
const errorMessage = document.createElement('p');
    errorMessage.textContent = 'error fetching movies';
return errorMessage;
});

};

const details = () => {
    return detailsResult().then(result => { 
    const arrayDetailsList = result.results;
        
    arrayDetailsList.forEach(item => {
    const liDetails = `document.createElement('p');`
        liDetails.textContent = `Some additional details about ${item.original_title}`;
    
    const genres = document.createElement('p');
        genres.textContent = item.arrayDetailsList;
    
        liElement.appendChild(liDetails);
        liElement.appendChild(genres);
    });
    
        console.log('Detalles de las películas:', arrayDetailsList);
            // Por ejemplo, podrías devolver o manipular el DOM aquí también
    }).catch(error => {
    console.error('Error fetching movie details:', error);
    });
    };
    
    // Exporta ambas funciones
    export default Movies;
