//aquí va todo lo relacionado al DOM
import App, {detailsResult} from './components/App.js';

const root = document.getElementById('root');

App().then((element) => { //
    root.appendChild(element);
}).catch((error) => {
    console.error('Error al renderizar App:', error);
});

detailsResult().then((element) => {
    console.log(element);
}).catch((error) => {
    console.error('Error al renderizar App:', error);
});