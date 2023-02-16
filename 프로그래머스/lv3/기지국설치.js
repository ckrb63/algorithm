function solution(n, stations, w) {
  const r = w * 2 + 1;
  let answer = 0;
  let index = 1;
  stations.forEach((s, i) => {
    if (index < s) {
      const temp = Math.ceil((s - w - index) / r);
      answer += temp;
    }
    index = s + w + 1;
  });
  if (index <= n) answer += Math.ceil((n + 1 - index) / r);
  return answer;
}
