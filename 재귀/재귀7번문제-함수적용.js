function someRecursive(arr, func){
  if(arr.length===0) return false;
  if(func(arr[0])) return true;
  else return someRecursive(arr.slice(1),func);
}

console.log(someRecursive([4,5,6,7],val=>val%2!==0));
