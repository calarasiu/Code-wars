// An array A is monotone increasing if for all i <= j, A[i] <= A[j].  
// An array A is monotone decreasing if for all i <= j, A[i] >= A[j].

var isMonotonic = function(A) {
  // first think and check the possible inputs
  if(A.length <=2) return true;

  let decrease = true;
  let increase = true;

  for(i=0;i<A.length;i++){
    if(A[i]<A[i+1]){
      decrease = false;
    }else if(A[i]>A[i+1]){
      increase=false;
    }
  };
  return decrease || increase;
};

console.log(isMonotonic([1,2,3]));