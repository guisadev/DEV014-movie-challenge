import Movies from '../components/Movies.js';


export const Home = () => {
const el = document.createElement("span");
Movies().then((element) => { //
    el.appendChild(element);
}).catch((error) => {
    console.error('Error al renderizar App:', error);
});

return el;
}
