var sortedSquares = function(A) {
  const b = A.map(element=>{
      return Math.pow(element, 2);
  })
  return b.sort(function(a,b){return(a-b)});
};

console.log(sortedSquares([2,10]));