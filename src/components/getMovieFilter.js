//configurar la API y hacer las consultas con fetch
//with_release_type
//filters support being comma (,) or pipe (|) separated.
//"genre_ids":
// discover/movie?year=1994 > esto debe ir en el query params

const requestOptions = {
method: "GET",
headers: myHeaders,
redirect: "follow"
};

export const fetchMovieFilters = (genre_ids, callback) => {
    //debría aquí llamar a la const requets?

    fetch(`https://api.themoviedb.org/3/discover/movie${genre_ids}`, requestOptions)
        .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
        })

        .then(data => {
            //console.log(data)
        callback(data);
        })

        .catch(error => {
        console.error('Error al obtener los detalles de la película:', error);
        alert('Error al obtener los detalles de la película: ' + error.message);
        });
    };
    
    //export { fetchMovieFilters };