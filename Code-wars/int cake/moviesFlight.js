const flightLength = 12;
const movieLengths = [5,2,3,9];

const searchMovie =((movies, flight)=>{
  moviesLengths = {};

  for(let i=0; i<movies.length; i++){
    let secondMovie = flight - movies[i];
    console.log('to find', secondMovie);
    if(secondMovie in moviesLengths){
      console.log('in');
      return true;
    } else{
      console.log('add', secondMovie);
      moviesLengths[secondMovie] = i;
      console.log(moviesLengths.length);
    }
  }
  return false;
})

console.log(searchMovie(movieLengths, flightLength));
