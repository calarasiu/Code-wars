// input - array of positives - 
//  to check - the sum !=0
// array.length >=3
// return the biggest perimeter
// The necessary and sufficient condition for these lengths to form a triangle of non-zero area is a + b > c

var largestPerimeter = function(A) {
    A.sort(function(a,b){return(b-a)});
    for(i=0;i<A.length-2;i++){
      let sum = A[i+1]+A[i+2];
      if(sum>A[i]){
        return sum +A[i];
      } 
    }
    return 0;
};

console.log(largestPerimeter([3,2,4]));