// importar la funcion getMovies (que trae el el return del fetch (promesa)) 
import dataResult from '../lib/getMovies'; // Adjust the path as necessary

// el .then lo utilizo porque es una respuesta asincrona

const App = () => {
    const ul = document.createElement('ul')
    

    return dataResult().then(result => {

        const arrayMoviesList = result.results;

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

            liElement.appendChild(originTitle);
            liElement.appendChild(newImage);
            liElement.appendChild(year);
            ul.appendChild(liElement);
        });
        return ul;

    }).catch(error => {
        console.error('Error fetching movies:', error);
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'error fetching movies';
        return errorMessage;
    });
    
}
export default App;
