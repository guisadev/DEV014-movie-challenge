//Aquí se importa la función que contiene la promesa que va a devolver las películas
import Movies from '../components/Movies.js';
import { orderByTitle, select } from '../components/Select.js';
//import { orderSortArray } from '../views/filter-sort.js'

const render = (div,filter, orderByTitle) => {
    Movies(div,filter,orderByTitle).then((element) => {
    div.appendChild(element);
    }).catch((error) => {
    console.error('Error al renderizar App:', error);
    });

return div;
};

export const Home = () => {
const el = document.createElement("span");
const div = document.createElement("div");// aqui esta el nodo de las peliculas
el.appendChild(select());
el.appendChild(orderByTitle());

const yearSelect = el.querySelector('#year') //declaro la variable y le asigno un querySelector
const titleSelect = el.querySelector('.original_title')


yearSelect.addEventListener('change', (event) =>{
const selectedYear = event.target.value;
    console.log(selectedYear);

//clear the movies with bucle
while (div.firstChild) {
    div.removeChild(div.firstChild);
}
const filter = { year: selectedYear };
console.log(selectedYear);

render(div, filter);
});

titleSelect.addEventListener('change', (event) => {
const selectedTitle = event.target.value;
    console.log('select ordenar',selectedTitle);

//clear the movies
while (div.firstChild) {
    div.removeChild(div.firstChild);
}
const filter = { title: selectedTitle };
    render(div, filter);
})

el.appendChild(render(div, {}));
return el;
}
