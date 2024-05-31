import { Home } from './views/home.js';
import {Error } from './views/error.js'
import {Detail } from './views/detail.js'
import { setRootEl, setRoutes, onURLChange } from './router.js';

const root = document.getElementById('root');//aqui debe ir el append de app

// ... import other views

// Define your routes and their associated views
const routes = {
  '/': Home,
  '/error': Error,
  '/detail': Detail
  // ...
};

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(root);
onURLChange(window.location.pathname);
});

