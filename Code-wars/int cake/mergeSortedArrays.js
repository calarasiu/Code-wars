const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

const insertSort = (arr)=>{
  if(arr.length<2){
    return arr;
  }
  for(let i=1;i<arr.length;i++){
    while(arr[i]<arr[i-1]){
      temp = arr[i];
      arr[i]=arr[i-1];
      arr[i-1]=temp;
      i--;
    }
  }
  return arr;
}

const sortArrays =(arr1, arr2)=>{
  arr3 = arr1.concat(arr2)
  return insertSort(arr3);
}

console.log(sortArrays(myArray,alicesArray));