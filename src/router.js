let ROUTES = {};
let rootEl;

export const setRootEl = (nodoRoot) => {
  // assign rootEl
  rootEl = nodoRoot;
}

export const setRoutes = (routes) => {
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  Object.assign(ROUTES, routes); // assign ROUTES
}

const queryStringToObject = (queryString) => {
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
}

const renderView = (pathname, props={}) => {
  // clear the root elemeny
  rootEl.innerHTML = '';
  // find the correct view in ROUTES for the pathname
const allRoutes = Object.keys(ROUTES);
const correctRoute = allRoutes.filter(routes => pathname == routes);
  // in case not found render the error view
  if (correctRoute [0] !== undefined) {
    //render the correct view passing the value of props
    // add the view element to the DOM root element
const route = ROUTES[correctRoute[0]];
rootEl.appendChild(route()) //aqui esta pendiente pasar las props 
  }


} 

export const navigateTo = (pathname, props={}) => {
  // update window history with pushState
  // render the view with the pathname and props
}

export const onURLChange = (location = '/') => {
  // parse the location for the pathname and search params

  // convert the search params to an object

  // render the view with the pathname and object
  renderView(location, undefined) // mirar linea 32 y 21
}