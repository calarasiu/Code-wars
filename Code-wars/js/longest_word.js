function LongestWord(sen) { 
  const punctuationless = sen.replace(/[^\w\s]/g,"");
  // console.log(punctuationless);
  sen = punctuationless.split(" ")
  // console.log(sen);
  sen.sort(function(a,b){return(b.length-a.length)});
  // code goes here  
  return sen[0]; 

}

console.log(LongestWord("I am! !curious"));