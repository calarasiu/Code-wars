var reverse = function(x) {
  const reversed =  parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
  return (reversed <= (Math.pow(2,31) - 1) && reversed >= (Math.pow(-2,31))) ? reversed : 0;
  
};

console.log(reverse(1534236469));