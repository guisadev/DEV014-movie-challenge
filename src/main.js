import { Home } from './views/home.js';
import { Error } from './views/error.js'
import { DetailView } from './views/detail.js'
import { setRootEl, setRoutes, onURLChange } from './router.js';

const root = document.getElementById('root');//aqui debe ir el append de app
// Define your routes and their associated views
const routes = { //routes debe ser un objeto (considere verificar que sea un objeto y arrojar un error si no es así). Utilice esta función para definir las rutas para su SPA.
  '/': Home,
  '/error': Error,
  '/detail': (params) => {

    console.log(params);
    // Verificar si se pasaron parámetros
    if (params && params.id) {
      // Extraer el ID de la película de los parámetros de la URL
      const { id } = params;
      // Renderizar la vista de detalles con el ID de la película
      return DetailView({ id });
    } else {
      // Si no se pasaron parámetros, redirigir a la página de error
      return Error();
    }
  }
  // ...
};

// Assign the routes
setRoutes(routes); //asigna el valor del argumento routes al objeto ROUTES

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(root);
onURLChange(window.location.pathname); //propiedad y valor que contienen la ruta url de la posición de ubicación.
});

window.addEventListener('popstate',()=>{
  onURLChange(document.location) //Vuelve a la pantalla principal.
})