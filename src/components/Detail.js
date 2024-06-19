// aqui va el detalle
// creaas una funcion que espera como parametro una prop y la prop contiene el id de la pelicula
const showMovieDetails = (movieId) => {
fetch(`https://api.themoviedb.org/3/movie/${movieId}`, requestOptions)
    .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
    })
    .then(data => {
      console.log('Datos de la película:', data); // Verificar los datos recibidos
    const modal = createModal(data);
    if (modal) {
        document.body.appendChild(modal);
    }
    })
    .catch(error => {
    console.error('Error al obtener los detalles de la película:', error);
    alert('Error al obtener los detalles de la película: ' + error.message);
    });
};

const createModal = (movieData) => {
  console.log('Creando modal para:', movieData); // Verificar los datos usados para el modal

const existingModal = document.querySelector('.modal');
if (existingModal) {
    existingModal.remove();
}

const modal = document.createElement('div');
    modal.classList.add('modal'); // 

const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content'); // 

const closeButton = document.createElement('span');
closeButton.classList.add('close-button'); // 
closeButton.textContent = '×';
closeButton.addEventListener('click', () => {
    modal.remove();
});

const movieTitle = document.createElement('h2');
movieTitle.textContent = movieData.title;

const movieOverview = document.createElement('p');
movieOverview.textContent = movieData.overview;

modalContent.appendChild(closeButton);
modalContent.appendChild(movieTitle);
modalContent.appendChild(movieOverview);

modal.appendChild(modalContent);

const createModalContainer = () => {
    let modalContainer = document.getElementById('modal-container');
    if (!modalContainer) {
        modalContainer = document.createElement('div');
        modalContainer.id = 'modal-container';
        document.body.appendChild(modalContainer);
    }
    return modalContainer;
};

  //const modalContainer = document.getElementById('modal-content');
const modalContainer = createModalContainer();

if (!modalContainer) {
    console.error('No se encontró el contenedor del modal');
    alert('No se encontró el contenedor del modal');
    return null; // Evitar errores si el contenedor no existe
}

modalContainer.appendChild(modal);

return modal;
};

export { showMovieDetails };