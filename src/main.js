//aquí va todo lo relacionado al DOM
import App from './components/App.js';

const root = document.getElementById('root');//aqui debe ir el append de app
App().then((element) => { // me dice que .then no está definido o que no es una función
    root.appendChild(element);
}).catch((error) => {
    console.error('Error al renderizar App:', error);
});

