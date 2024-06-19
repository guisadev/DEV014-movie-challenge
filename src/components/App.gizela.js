//Esta es la función del test unitario App
const myHeaders = new Headers();
myHeaders.append("accept", "application/json");
myHeaders.append("Authorization", " Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiODE1YWM3YjI3YTljY2ZjMjg2ZDIyMDQ5YWEzNzUwNyIsInN1YiI6IjY2NDJjMDY2NTNjMmRjMTZiNjU5Y2IyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._Sj8-CMfBbQxq9VY0alFIPJ9oLpJL34KCladD1jXQBs");

const requestOptions = {
  method: "GET", // metodo > un verbo o lo que quiero pedir hacer
  headers: myHeaders, // mensaje que quiero transmitir del cliente al servidor
};


const dataResult = fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc", requestOptions)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // 
  })
  .then((result) => {
    console.log(result); //
    return result; //
  })
  .catch((error) => {
    console.error('There was a problem with the fetch operation:', error);
  });

export default dataResult;
