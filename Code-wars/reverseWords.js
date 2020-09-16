const reverseWords = (arr) => {
  let i=0;
  const arrWords = []
  arr.map=(element)=>{
    if(element === " "){
      i++;
      return element;
    } else{
      arrWords[i]+=element;
    }
  }
  return arrWords;
}

console.log(reverseWords([ 'c', 'a', 'k', 'e', ' ','p', 'o', 'u', 'n', 'd', ' ','s', 't', 'e', 'a', 'l' ]));