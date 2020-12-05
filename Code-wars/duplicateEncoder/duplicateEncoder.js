function duplicateEncode(word){
  let wordCounter={};
  const lowerCaseWord = word.toLowerCase();
  for(let i=0; i< lowerCaseWord.length; i++){
    if(wordCounter[lowerCaseWord[i]]){
      wordCounter[lowerCaseWord[i]]+=1;
      console.log("incremented", wordCounter[lowerCaseWord[i]])
    }else{
      wordCounter[lowerCaseWord[i]] = 1;
      console.log("declared", wordCounter[lowerCaseWord[i]])
    }
  }

  const bracketWords = Array.from(lowerCaseWord);
  const brackets = bracketWords.map((ch)=>{
    if(wordCounter[ch] === 1){
      return wordCounter[ch];
    }else{
      return wordCounter[ch];
    }
  })
  return brackets.join("");
}

console.log(duplicateEncode("Wordo"));