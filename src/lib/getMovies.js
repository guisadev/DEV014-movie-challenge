const dataResult = () => {
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODE1YWM3YjI3YTljY2ZjMjg2ZDIyMDQ5YWEzNzUwNyIsInN1YiI6IjY2NDJjMDY2NTNjMmRjMTZiNjU5Y2IyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Sj8-CMfBbQxq9VY0alFIPJ9oLpJL34KCladD1jXQBs'
        }
    };
    
    return fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
        .then(response => response.json())
        .then(response => response)
        .catch(err => err);
}

export default dataResult;

const detailsResult = () => {
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODE1YWM3YjI3YTljY2ZjMjg2ZDIyMDQ5YWEzNzUwNyIsInN1YiI6IjY2NDJjMDY2NTNjMmRjMTZiNjU5Y2IyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Sj8-CMfBbQxq9VY0alFIPJ9oLpJL34KCladD1jXQBs'
        }
    };
    
    return fetch('https://api.themoviedb.org/3/movie/3', options)
        .then(response => response.json())
        .then(response => response) //quitar el console.log después de ejecutar la función details.
        .catch(err => err);
}

export { detailsResult };

const filterResult = () => {
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODE1YWM3YjI3YTljY2ZjMjg2ZDIyMDQ5YWEzNzUwNyIsInN1YiI6IjY2NDJjMDY2NTNjMmRjMTZiNjU5Y2IyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Sj8-CMfBbQxq9VY0alFIPJ9oLpJL34KCladD1jXQBs'
        }
    };
    
    return fetch('https://developer.themoviedb.org/reference/discover-movie', options)
        .then(response => response.json())
        .then(response => response) //quitar el console.log después de ejecutar la función filter.
        .catch(err => err);
}

export { filterResult };