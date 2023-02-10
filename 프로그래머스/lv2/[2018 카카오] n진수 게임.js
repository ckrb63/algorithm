function solution(n, t, m, p) {
  let str = "";
  let answer = "";
  for (let i = 0; i < t * m - (m - p); i++) str += i.toString(n);
  const arr = str.toUpperCase().split("");
  for (let i = p - 1; i < t * m - (m - p); i += m) answer += arr[i];
  return answer;
}
