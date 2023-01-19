function solution(str1, str2) {
  const arr = str1.split("");
  const arr2 = str2.split("");
  let flag = true;
  const map1 = new Map();
  arr.forEach((e) => {
    if (map1.get(e) > 0) map1.set(e, map1.get(e) + 1);
    else map1.set(e, 1);
  });
  arr2.forEach((e) => {
    if (map1.get(e) > 0) map1.set(e, map1.get(e) - 1);
    else flag = false;
  });
  return flag;
}

console.log(solution("abaCC", "CCaab"));
