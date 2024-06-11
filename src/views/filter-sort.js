import { fetchMovieFilters } from "../components/getMovieFilter";
import dataResult from "../lib/getMovies";
//se importa la promesa que espera crear los filtros
//mostrar y procesar los datos de filter y sort
export const filtersView = (queryParams) => {
    const { genre_ids } = queryParams;
}

//se crea una constante html para insertar los nodos que crearán la estructura de filtros
const html = document.createElement('nav');
html.genre_ids = 'filter-view';
//itemScope e itemType + url genre_ids ?






// Aqui llamo a la función que hace la petición a la API
fetchMovieFilters(genre_ids, (data) => {
    // Llamar a la función que procesa y muestra los datos de la película
    dataResult(data, filterViewContainer);
});
