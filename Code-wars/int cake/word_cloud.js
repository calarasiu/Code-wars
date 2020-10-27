const wordCloud=(string)=>{
  counter = new Map;

  for(let i = 0; i<string.length;i++){
    if(counter.has(string[i].toLowerCase())){
      console.log("already present");
      let val = counter.get(string[i].toLowerCase())
      console.log(val++);
      counter.set(string[i].toLowerCase(), val++);
    }else{
      console.log("adding now");
      counter.set(string[i].toLowerCase(), 1);
    }
  }
  return counter;
}

console.log(wordCloud(  "After beating the eggs, Dana read the next step"));