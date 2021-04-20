function getAverage(marks){
  //TODO : calculate the downwar rounded average of the marks array
  const sum = marks.reduce(function(a,b){
    return a+b;
  }, 0);
  
  return Math.floor(sum/marks.length);
}