function averagePair(arr,avg){
  let i=0;
  let j=arr.length-1;
  let value;
  while(i<j){
    value = (arr[i]+arr[j])/2;
    if(value===avg)
      return true;
    if(value<avg){
      i++;
    }
    if(value>avg){
      j--;
    }
  }
  return false;
}
