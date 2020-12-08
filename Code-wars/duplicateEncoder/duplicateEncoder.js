function duplicateEncode(word){
  if(word.length <=0 || typeof word != "string"){
    return "";
  }
  const lowerCaseWord = word.toLowerCase();
  let brackets = "";
  for(let i=0; i< lowerCaseWord.length; i++){
    if(lowerCaseWord.lastIndexOf(lowerCaseWord[i]) === lowerCaseWord.indexOf(lowerCaseWord[i])){
      brackets +="(";
    }else{
      brackets +=")";
    }
  }
  return brackets;
}

// console.log(duplicateEncode("Wordo"));

module.exports = duplicateEncode;