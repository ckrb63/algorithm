function countUniqueValues(arr){
  if(arr.length===0)
    return 0;
  let j = 1;
  let count = 1;
  for(let i=0;i<arr.length-1;i++,j++){
    if(arr[i]!==arr[j])
      count++;
  }
  return count;
}
countUniqueValues()