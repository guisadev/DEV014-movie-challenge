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

/*const detailsResult = () => {
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODE1YWM3YjI3YTljY2ZjMjg2ZDIyMDQ5YWEzNzUwNyIsInN1YiI6IjY2NDJjMDY2NTNjMmRjMTZiNjU5Y2IyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Sj8-CMfBbQxq9VY0alFIPJ9oLpJL34KCladD1jXQBs'
        }
    };
    
    fetch('https://api.themoviedb.org/3/movie/movie_id', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}*/