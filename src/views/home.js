//Aquí se importa la función que contiene la promesa que va a devolver las películas
import Movies from '../components/Movies.js';
import { select } from '../components/Select.js';

export const Home = () => {
const el = document.createElement("span");
const div = document.createElement("div");// aqui esta el nodo de las peliculas
el.appendChild(select());
const yearSelect = el.querySelector('#year')
yearSelect.addEventListener('change', (event) =>{
    const selectedYear = event.target.value;
    console.log(selectedYear);
    // primer paso borrar las peliculas
//const renderView = 
    // segundo paso invocar a la funcion que trae el endpoint
    // hacer un console.log para imprimir la respuesta de la promesa

    // poner la nuevas peliculas de acuerdo al filtro
});

Movies().then((element) => { //
    div.appendChild(element);
}).catch((error) => {
    console.error('Error al renderizar App:', error);
});

el.appendChild(div)
return el;
}

