//Aquí se importa la función que contiene la promesa que va a devolver las películas
import Movies from '../components/Movies.js';
import { select } from '../components/Select.js';
//ncesito crear una constante que tenga una función que me permita crear un elemento select
//para insertar dentro un desplegable para el menú de filtro 'year'
//¿cómo hacerlo?
//crear la constante y dentro realizar una arrow function que va a contener los elementos 
//html creados con nodos para crear la estructura de los filtros
//ahora ¿en qué parte de la estructura html quiero que aparezca este menú?
//el menú de filtro debe pocicionarse en el pie del elemento header.
//la sintaxis indica que primero se nombra en una constante el elemento que se va a crear (span,div,etc)
//y ese elemento que se quiere crear será insertado en el documento (document.createElement)
//lo valida meidante esta sintáxis ('x')
//y fianlmente se fijará en la estructura html mediante esta sintáxis appendChild
// el.appendChild(select()); se inserta el elemento en el select

export const Home = () => {
const el = document.createElement("span");
const div = document.createElement('div');
el.appendChild(select());





Movies().then((element) => { //
    el.appendChild(element);
}).catch((error) => {
    console.error('Error al renderizar App:', error);
});

return el;
}

