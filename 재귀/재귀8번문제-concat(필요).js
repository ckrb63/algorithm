function flatten(arr){
  const newArr = [];
  for(let i = 0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      newArr = newArr.concat(flatten(arr[i]));
    }
    else newArr.push(arr[i]);
  }
  return newArr;
}