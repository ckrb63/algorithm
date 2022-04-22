function validAnagram(array1,array2){
  if(array1.length !== array2.length)
    return false;
  // frequent count
  // arr1 => obj
  let arr1 = {};
  let arr2 = {};
  for(const char of array1){
    arr1[char] = (arr1[char] || 0 ) + 1;
  }
  for(const char of array2){
    arr2[char] = (arr2[char] || 0) + 1;
  }
  for(const key in arr1){
    if(arr1[key] !== arr2[key])
      return false;
  }
  // arr2 => obj
  // 둘중 하나로 반복
  return true;
}
validAnagram('qwe','asd');


