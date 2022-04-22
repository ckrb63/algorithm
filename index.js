function minSubArrayLen(arr,n){
  let value = 0;
  for (let i=0;i<arr.length;i++){
    value += arr[i];
  }
  if(value<n){
    return 0;
  }
  let i=0;
  let j=0;
  let count=0;
  let min=Infinity;
  while(i<j){
    if(value>n){

    }
  }
}