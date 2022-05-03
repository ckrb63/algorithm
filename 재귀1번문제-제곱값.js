// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow()
// do not woory about negative bases and exponents.

// power(2,1) = 2
// power(2,2) = 4

// 제곱 값을 재귀를 통하여 구하여라

function power(base,exponent){

  if(exponent===0) return 1;
  return base * power(base,exponent-1);
}

console.log(power(2,2));
console.log(power(2,0));