// given an array it should return the first double or undefined
// first check the input
const checkDouble = function(arr){
  if(!arr || arr.length < 2 ){
    return undefined              
  }

  const checked = {};               //space complexity O(n)

  for(i=0;i<arr.length;i++){
    if(checked[arr[i]]){
      return arr[i];          //time complexity O(n)
    } else {
      checked[arr[i]] = i;
    }
  };
  return undefined;
}

console.log(checkDouble([2]));

const checkFirstRecursion = function(arr){
  for(let i = 0; i< arr.length;i++){
    console.log("inside the first loop");
    for (let j = i+1; j<arr.length; j++){
      console.log("inside the second loop",arr[j]);
      if(arr[i] === arr[j]){
        console.log("compare", arr[i], arr[j])
        return arr[i];
      }else if(arr[j] === arr[j+1] || arr[j+1] === arr[i]){
        console.log("second if",arr[i],arr[j],arr[j+1])
        return arr[j+1];
      }
    }
  }
  return undefined;
}

console.log(checkFirstRecursion([2,5,3,5,2]))