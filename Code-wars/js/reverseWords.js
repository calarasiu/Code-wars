function reverseWords(arr){
  
 reverse(0, arr.length-1, arr);

  currentWordStartIndex = 0;

  for(i=0; i<=arr.length; i++){
    if(i===arr.length || arr[i]===" "){
      reverse(currentWordStartIndex, i-1, arr);
      currentWordStartIndex = 1+ i;
    }    
  }
  return arr;
}

function reverse(startLine, finishLine, toReverse){
  let temp = 0;
  while(startLine<finishLine){
    temp = toReverse[startLine];
    toReverse[startLine] = toReverse[finishLine];
    toReverse[finishLine] = temp;
    startLine++;
    finishLine--;
  }
}

console.log(reverseWords([ 'c', 'a', 'k', 'e', ' ','p', 'o', 'u', 'n', 'd', ' ','s', 't', 'e', 'a', 'l'," ","h","e","y","!" ]));