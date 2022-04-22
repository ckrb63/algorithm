function areThereDuplicates(...args){
  let obj = {};
  for(let i of args){
    obj[i] = obj[i] + 1 | 1;
  }
  for(let i in obj){
    if(obj[i]>1)
      return true;
  }
  return false;
}