function maxSubarraySum(arr,n){
  if(arr.length<n)
    return null;
  let i=0;
  let value=0;
  for(i=0;i<n;i++){
    value += arr[i];
  }
  let max = value;
  for(i=0;i<arr.length-n;i++){
    value = value - arr[i] + arr[i+n];
    if(value>max)
      max=value;
  }
  return max;
}