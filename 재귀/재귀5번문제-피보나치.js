function fib(seq){
  if(seq<=0) return 0;
  if(seq===1) return 1;
  return fib(seq-1) + fib(seq-2);
}

console.log(fib(28));