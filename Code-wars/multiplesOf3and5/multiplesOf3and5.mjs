export default function solution(number){
  let sum = 0;
  if(number <= 0){
    return 0;
  }

  for(let i=0;i<number;i++){
    if(number%3===0 || number%5===0){
      return sum+=number;
    }
  }
 
}

console.log(solution(10));