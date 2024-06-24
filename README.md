# Movie Challenge

## Índice

- [1. Preámbulo](#1-preambulo)
- [2. Resumen del proyecto](#2-resumen-del-proyecto)
- [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
- [4. Consideraciones generales](#4-consideraciones-generales)
- [5. Consideraciones técnicas](#5-consideraciones-técnicas)
- [6. Criterios mínimos de aceptación del proyecto](#6-criterios-mínimos-de-aceptación-del-proyecto)
- [7. Deploy](#7-deploy)
- [8. Consideraciones para pedir tu project feedback](#8-consideraciones-para-pedir-tu-project-feedback)
- [9. Consejos, guías y lecturas complementarias](#9-consejos-guías-y-lecturas-complementarias)

---

## 1. Preámbulo

El desafío de películas se ha desarrollado con la intención de que el usuario logre acceder a una listado de películas. La web está diseñada para que logre acceder a alguna de las películas a travéz de un filtro por año de lanzamiento y/o por ordenado a través del titulo de la pleícula de manera ascendente o descendente, permitiendo un acceso más directo a lo que desea encontrar.

![Pelis](https://live.staticflickr.com/117/257368762_38bf6fcf9f_h.jpg)

## 3. Objetivos de aprendizaje


Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### HTML

- [ ] **Uso de HTML semántico**

  <details><summary>Links</summary><p>

  * [HTML semántico](https://curriculum.laboratoria.la/es/topics/html/html5/semantic-html)
  * [Semantics - MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

### CSS

- [ ] **Uso de selectores de CSS**

  <details><summary>Links</summary><p>

  * [Intro a CSS](https://curriculum.laboratoria.la/es/topics/css/css/intro-css)
  * [CSS Selectors - MDN](https://developer.mozilla.org/es/docs/Web/CSS/CSS_Selectors)
</p></details>

- [ ] **Modelo de caja (box model): borde, margen, padding**

  <details><summary>Links</summary><p>

  * [Box Model & Display](https://curriculum.laboratoria.la/es/topics/css/css/boxmodel-and-display)
  * [The box model - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
  * [Introduction to the CSS box model - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  * [CSS display - MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/display)
  * [display - CSS Tricks](https://css-tricks.com/almanac/properties/d/display/)
</p></details>

- [ ] **Uso de flexbox en CSS**

  <details><summary>Links</summary><p>

  * [A Complete Guide to Flexbox - CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
  * [Flexbox Froggy](https://flexboxfroggy.com/#es)
  * [Flexbox - MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
</p></details>

### Web APIs

#### DOM (Document Object Model)

- [ ] **Uso de selectores del DOM**

  <details><summary>Links</summary><p>

  * [Manipulación del DOM](https://curriculum.laboratoria.la/es/topics/browser/dom/1-dom-methods-selection)
  * [Introducción al DOM - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Localizando elementos DOM usando selectores - MDN](https://developer.mozilla.org/es/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
</p></details>

- [ ] **Manejo de eventos del DOM (listeners, propagación, delegación)**

  <details><summary>Links</summary><p>

  * [Introducción a eventos - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Events)
  * [EventTarget.addEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
  * [EventTarget.removeEventListener() - MDN](https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener)
  * [El objeto Event](https://developer.mozilla.org/es/docs/Web/API/Event)
</p></details>

- [ ] **Manipulación dinámica del DOM**

  <details><summary>Links</summary><p>

  * [Introducción al DOM](https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction)
  * [Node.appendChild() - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/appendChild)
  * [Document.createElement() - MDN](https://developer.mozilla.org/es/docs/Web/API/Document/createElement)
  * [Document.createTextNode()](https://developer.mozilla.org/es/docs/Web/API/Document/createTextNode)
  * [Element.innerHTML - MDN](https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML)
  * [Node.textContent - MDN](https://developer.mozilla.org/es/docs/Web/API/Node/textContent)
</p></details>

### JavaScript

- [ ] **Variables (declaración, asignación, ámbito)**

  <details><summary>Links</summary><p>

  * [Valores, tipos de datos y operadores](https://curriculum.laboratoria.la/es/topics/javascript/basics/values-variables-and-types)
  * [Variables](https://curriculum.laboratoria.la/es/topics/javascript/basics/variables)
</p></details>

- [ ] **Uso de condicionales (if-else, switch, operador ternario, lógica booleana)**

  <details><summary>Links</summary><p>

  * [Estructuras condicionales y repetitivas](https://curriculum.laboratoria.la/es/topics/javascript/flow-control/conditionals-and-loops)
  * [Tomando decisiones en tu código — condicionales - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/conditionals)
</p></details>

- [ ] **Uso de bucles/ciclos (while, for, for..of)**

  <details><summary>Links</summary><p>

  * [Bucles (Loops)](https://curriculum.laboratoria.la/es/topics/javascript/flow-control/loops)
  * [Bucles e iteración - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
</p></details>

- [ ] **Funciones (params, args, return)**

  <details><summary>Links</summary><p>

  * [Funciones (control de flujo)](https://curriculum.laboratoria.la/es/topics/javascript/flow-control/functions)
  * [Funciones clásicas](https://curriculum.laboratoria.la/es/topics/javascript/functions/classic)
  * [Arrow Functions](https://curriculum.laboratoria.la/es/topics/javascript/functions/arrow)
  * [Funciones — bloques de código reutilizables - MDN](https://developer.mozilla.org/es/docs/Learn/JavaScript/Building_blocks/Functions)
</p></details>

- [ ] **Uso de linter (ESLINT)**

- [ ] **Uso de identificadores descriptivos (Nomenclatura y Semántica)**

- [ ] **Diferenciar entre expresiones (expressions) y sentencias (statements)**

#### Tipos de datos

- [ ] **Diferenciar entre tipos de datos primitivos y no primitivos**

- [ ] **Arrays (arreglos)**

  <details><summary>Links</summary><p>

  * [Arreglos](https://curriculum.laboratoria.la/es/topics/javascript/arrays)
  * [Array - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/)
  * [Array.prototype.sort() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
  * [Array.prototype.forEach() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
  * [Array.prototype.map() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
  * [Array.prototype.filter() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
  * [Array.prototype.reduce() - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
</p></details>

- [ ] **Objetos (key, value)**

  <details><summary>Links</summary><p>

  * [Objetos en JavaScript](https://curriculum.laboratoria.la/es/topics/javascript/objects/objects)
</p></details>

#### Testing en Javascript

- [ ] **Pruebas unitarias (unit tests)**

  <details><summary>Links</summary><p>

  * [Empezando con Jest - Documentación oficial](https://jestjs.io/docs/es-ES/getting-started)
</p></details>

#### Módulos

- [ ] **Módulos de ECMAScript (ES Modules)**

  <details><summary>Links</summary><p>

  * [import - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/import)
  * [export - MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/export)
</p></details>

### Control de Versiones (Git y GitHub)

#### Git

- [ ] **Git: Instalación y configuración**

- [ ] **Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote)**

- [ ] **Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag)**

#### GitHub

- [ ] **GitHub: Creación de cuenta y repos, configuración de llaves SSH**

- [ ] **GitHub: Despliegue con GitHub Pages**

  <details><summary>Links</summary><p>

  * [Sitio oficial de GitHub Pages](https://pages.github.com/)
</p></details>

- [ ] **GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags)**

### Centrado en el usuario

- [ ] **Diseñar y desarrollar un producto o servicio poniendo a las usuarias en el centro**

### Diseño de producto

- [ ] **Crear prototipos de alta fidelidad que incluyan interacciones**

- [ ] **Seguir los principios básicos de diseño visual**

### Investigación

- [ ] **Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad**

  <details><summary>Links</summary><p>

  * [Intro a testeos usabilidad](https://coda.io/@bootcamp-laboratoria/contenido-ux/test-de-usabilidad-15)
  * [Pruebas con Usuarios 1 — ¿Qué, cuándo y para qué testeamos?](https://eugeniacasabona.medium.com/pruebas-con-usuarios-1-qu%C3%A9-cu%C3%A1ndo-y-para-qu%C3%A9-testeamos-7c3a89b4b5e7)
</p></details>

## 4. Consideraciones generales

- Este proyecto se debe resolver individual.
- El plazo estimado para completar el proyecto es de 4 Sprints.
- Además, debes definir la estructura de carpeta y los archivos que considera
que sean necesario. Por lo tanto, las pruebas y la configuración requeridas
para ejecutarlos será su responsabilidad, para hacerlo puedes basarte en los
proyectos anteriores.

## 5. Consideraciones técnicas

- La aplicación debe ser una aplicación de una sola página.

- Las pruebas unitarias deben cubrir al menos el 90% statements, functions,
lines y branches.

- La aplicación debe ser responsive.

- Para poder usar la [La API V3 de la Base de Datos de Películas](https://developer.themoviedb.org/docs/getting-started)
deberás crear una llave (key) de acceso agregarla a cada petición que hagas al
servidor

- Recuerda que tienes un máximo de 1.000 peticiones diarias a la API
por cada [IP](https://es.wikipedia.org/wiki/Direcci%C3%B3n_IP), creemos que es
suficiente, pero te recomendamos hacer un uso responsable de este recurso
gratuito.

El _boilerplate_ contiene una estructura de archivos que se dividen en components y views que será donde se implementarán los archivos para trabajar en orden y así también toda la configuración de dependencias:

```text
.
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── package.json
├── README.md
├── src
    ├── components
    │   ├── App.gizela.js
    │   └── Detail.js
    |   |__ fakeApp.js
    |   |__ getMovieDetail.js
    |   |__ Movies.js
    |   |__ Select.js
    |__ views
    |   |__ detail.js
    |   |__ error.js
    |   |__ filter-sort.js
    |   |__ home.js
    |   |__ repaso.js
    ├── index.html
    |__ main copy.js
    ├── main.js
    |__ router.js
    └── style.css

```

### `src/index.html`

Como en el proyecto anterior, hay un archivo `index.html` . Como ya sabes, aquí
ingresa la página que se mostrará al usuario. También sirve para indicar cuales
son los scripts se utilizarán y armarán todo lo que se ha hecho.

### `src/main.js`

En el archivo main `src/main.js`, como punto de entrada de la aplicación será el encargado de renderizar las vistas del router que mostrará la implementación de la SPA (Single Page Application).

### `src/components/App.js`

Este archivo contiene componentes que muestra cómo podemos representar
un componente en función que devuelve un `HTMLElement`. A la hora de construir
interfaces, es útil pensar en los términos de los _componentes_ o vistas que
podemos anidar una dentro de las otras. Aquí uso algunos componentes para crear funciones con vanilla JS, otros para trabajar con método reacto antes de aplicar funciones y archivos que son implementados con el desarrollo en el cual se exportan funciones. Pensé estos  _componentes_ como cajitas que se necesitan para construir la aplicación.

### `scr/test/App.spec.js`

Este archivo muestra cómo podemos crear archivos con especificaciones (expresado
como test unitarios) de nuestros componentes.

## 6. Criterios mínimos de aceptación del proyecto

### Prototipo de alta fidelidad
 
Primero realicé una investigación rápida navegando por internet según un modelo en el cual basarme para construir un diseño. En Figma, reuní modelos algunas plantillas con colores y estructura que se alineaban con la idea que tenía para construir un prototipo. Teniendo esto, utilicé las herramientas de la plataforma para construir un prototipo en tamaño móvil y luego en tamaño escritorio.
El proyecto fue tomando forma gracias al testeo de usabilidad y los feedbacks obetenidos en los sprint reviews de cada demo.
---

#### [Historia de Usuario 1] Lista de Películas

Yo como ususario, quiero ver un catálogo de películas en una tabla (líneas y
columnas).

##### Criterios de apectación

- [El endpoint `/discover/movie`](https://developer.themoviedb.org/reference/discover-movie)
debe ser utilizado.
- La aplicación debe incluir la paginación para explorar el catálogo por páginas
- Cada película debe mostrar al menos : póster, título original y año de estreno

##### Definición de terminado

- Los componentes desarrollados deben tener pruebas unitarias

---

#### [Historia de Usuario 2] Detalles de película

Yo, como usuario, quiere consultar detalles de las películas

##### Criterios de aceptación

- El endpoint debe ser utilizado [/movie/{movie_id}](https://developer.themoviedb.org/reference/movie-details).
- Cada película debe mostrar al menos : póster, título original, año de
lanzamiento, género, votación media, votos totales.
- La interfaz debe permitir volver a la lista de películas manteniendo el filtro
y la orden.

##### Definición de terminado

- Los componentes desarrollados deben tener pruebas unitarias

---

#### [Historia de Usuario 3 - Hacker Edition] Filtrar y Ordenar

Yo, como usuario, quiero filtrar y ordenar el catálogo de la película usando los
críterios compatibles con Themovie Database API V3.

##### Criterios de aceptación

- Para filtrar, se debe utilizar el endpoint [/discover/movie](https://developer.themoviedb.org/reference/discover-movie),
y uno o más parámetros, como por ejemeplo with_genres.
- Para ordenar, debes utilizar el enpoint [/discover/movie](https://developer.themoviedb.org/reference/discover-movie),
y uno o más parámetros, como por ejemplo sort_by
- La página debe mantener el filtro y el ordenamiento.
- Cada película debe mostrar al menos: póster, título original y año de estreno.

##### Definición de terminado

- Los componentes desarrollados deben tener pruebas unitarias

## 7. Deploy

Puede elegir el proveedor (o proveedores) que prefiera, junto con el mecanismo
de deploy y la estrategia de hospedía. Recomendamos explorar las siguientes
opciones:

- [Vercel](https://vercel.com/) es una plataforma que permite desplegar nuestra
aplicación web estática (HTML, CSS, JavaScript) y también permite implementar
aplicaciones web que se ejecutan en el servidor (Node.js).
- [Netlify](https://www.netlify.com/) es similar a Vercel, siendo una plataforma
que permite implementar nuestra aplicación web estática (HTML, CSS y JavaScript)
y también permite implementar aplicaciones web que se ejecutan en el servidos
(Node.js).


## 8. Consejos, guías y lecturas complementarias

### Propotito de alta fidelidad

Basandote en el prototipo de baja fidelidad proporcionado, deberás crear un
prototipo de alta fidelidad en Figma. Agrega paleta de colores y un diseño
gráfico. Intenta terminar en 1 o 2 días como máximo.

#### Explorar y consumir la API de la base de datos de películas

Explora la [documentación](https://developer.themoviedb.org/docs) de la API de
la base de datos de la Película. Comienza leyendo la sección [Getting Started](https://developer.themoviedb.org/docs/getting-started),
despues continúa [AUTHENTICATION --> Application](https://developer.themoviedb.org/docs/authentication-application)
y finalmente las referencias de los endpoints [/discover/movie](https://developer.themoviedb.org/reference/discover-movie)
y [/movie/{movie_id}](https://developer.themoviedb.org/reference/movie-details)

Deberás crear una cuenta y generar una clave(key) de acceso para consumir la API

Por último, puedes probar hacer peticiones HTTP a la API utilizando herramientas
como [Postam](https://www.postman.com/) o [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
Identificando encabezados(header), cuerpo(body), verbos, códigos de respuesta y
códigos de solicitudes.

#### Planear la implementación de la primera Historia de Usuario

Toma la primera historia de usuario y dividela en tareas más pequeñas,
identificando el orden y prioridades de cada tarea. Documenta tu planificación
en Trello o Github Project.

#### Entendiendo los conceptos de SPA (Single Page Aplication) y Router

Antes de comenzar con el código, asegúrate de entender los conceptos de una
single page aplication(SPA) y enrutado de páginas. Esto te permitirá crear una
experiencia de usuario fluida y dinámica. Investiga las mejores prácticas y
herramientas disponibles para implementar una SPA en tu proyecto.

Recomendamos hacer una SPA más simple usando `hashchange` . Este [video](https://youtu.be/hf8x3A1e57Y)
puede ayudarte a construir tu SPA en `main.js` de tu proyecto.

Si puedes tomarte el tiempo y quieres profundizar en las rutas y en la
construcción de una SPA mas robusta, como `Hacker Edition`, puedes inplementar
[Router con JavaScript puro](https://github.com/Laboratoria/curriculum/blob/main/guides/router-spa/README.md)

¡a empezar esta aventura 🎬!
