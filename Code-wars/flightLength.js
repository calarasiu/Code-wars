function flightLength(flight, movieLength){
  // movieLength[a]+movieLength[b] === flight;

  // movieTarget = {}; - as I will need just the keys I will s=use the set
  movieTarget = new Set();


  for(i=0;i<movieLength.length;i++){
    complementaryMovie = flight - movieLength[i];
    console.log(complementaryMovie);

    if(complementaryMovie in movieTarget){
      return true; 
    }else{
      movieTarget.add(movieLength[i]);
      console.log(movieTarget);
    }
    
  }
  return false;
}

console.log(flightLength(250, [125]));