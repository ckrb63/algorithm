function sameFrequency(n1,n2){
  const str1 = n1.toString();
  const str2 = n2.toString();
  if(str1.length!==str2.length)
    return false;
  let obj1 = {};
  let obj2 = {};
  for(let i=0;i<str1.length;i++){
    obj1[str1[i]] = obj1[str1[i]] ? obj1[str1[i]] + 1 : 1;
    obj2[str2[i]] = obj2[str2[i]] ? obj2[str2[i]] + 1 : 1;
  }
  for(let key in obj1){
    if(obj1[key]!==obj2[key])
      return false;
  }
  return true;
}
console.log(sameFrequency(555,555));
