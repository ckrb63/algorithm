function solution(s) {
  const hash = new Map();
  const arr = [];
  const answer = [];
  const regex = /[{}]/g;
  s = s.split("},");
  s = s.map((l) => {
    return l.replace(regex, "").split(",");
  });
  s.sort((a, b) => a.length - b.length);
  s.forEach((n) => {
    n.forEach((k) => {
      arr.push(k);
    });
  });
  arr.forEach((n) => {
    hash.set(n * 1, 1);
  });
  for ([key, val] of hash) {
    answer.push(key);
  }
  return answer;
}
