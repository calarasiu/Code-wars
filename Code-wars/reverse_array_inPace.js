// Write a function that takes an array of characters and reverses the letters in place

function reverse(array){
  first = 0;
  last = array.length-1;
  while(array && first<last){
    let temp
    temp = array[first];
    array[first] = array[last];
    array[last] = temp;

    first++;
    last--;
    console.log(array);
  }
  return array;
}

console.log(reverse(["a","c","d"]));