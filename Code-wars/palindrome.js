const isPalindrome = (number)=>{
  
  if(number == number.toString().split("").reverse().join("")){
   return true
  }
  return false;
}
console.log(isPalindrome(-123));