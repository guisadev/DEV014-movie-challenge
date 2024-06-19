let ROUTES = {};
let rootEl; //Elemento DOM: Esta variable almacena el elemento donde el contenido SPA cambiará/aparecerá.

export const setRootEl = (nodoRoot) => {
  rootEl = nodoRoot;
}

export const setRoutes = (routes) => { //Utilice esta función para definir las rutas para su SPA.
  if (typeof routes !== 'object' || !routes['/error']) {
    throw new Error('Routes must be an object and must define an /error route');
  }
  Object.assign(ROUTES, routes);
}

const queryStringToObject = (queryString) => { //Una función de utilidad para convertir una cadena de search o query string en un objeto para acceder fácilmente a los parámetros de consulta.
  const params = new URLSearchParams(queryString);
  return Object.fromEntries(params.entries());
}

const renderView = (pathname, props = {}) => { //Pasando el valor props como argumento a la vista. Esta función representa una vista en el elemento raíz especificado.
  rootEl.innerHTML = ''; //el detalle de la peli

  const route = ROUTES[pathname] || ROUTES['/error'];
  rootEl.appendChild(route(props));
}

export const navigateTo = (pathname, props = {}) => { //Esta función se utiliza para navegar mediante programación a una nueva ruta dentro del SPA.
  const url = new URL(window.location.href);
  url.pathname = pathname; 
  url.search = new URLSearchParams(props).toString();
  window.history.pushState({}, '', url.toString()); //Actualiza la URL usando esa forma dada para mostrar la vista correspondiente.
  renderView(pathname, props); //Props que es un objeto de datos que podemos pasar a la vista.
}

export const onURLChange = (location = '/') => { //Esta función está destinada a manejar cambios de URL.
  const url = new URL(window.location.href); //usar aquí popstate
  const pathname = url.pathname;
  const searchParams = queryStringToObject(url.search);

  renderView(pathname, searchParams);
}