function solution(N, road, K) {
  let answer = 0;
  const arr = Array.from(Array(N + 1), () => Array(N + 1).fill(Infinity));
  for (let i = 1; i <= N; i++) arr[i][i] = 0;
  road.forEach((r) => {
    if (arr[r[0]][r[1]] > r[2]) {
      arr[r[0]][r[1]] = r[2];
      arr[r[1]][r[0]] = r[2];
    }
  });
  const d = [...arr[1]];
  const ch = Array.from({ length: N + 1 }, () => 0);
  ch[0] = 1;
  ch[1] = 1;
  a: for (let i = 1; i < N; i++) {
    let min = Infinity;
    let index = 0;
    b: for (let j = 2; j <= N; j++) {
      if (ch[j] === 1) continue b;
      if (d[j] < min) {
        index = j;
        min = d[j];
      }
    }
    if (index === 0) break a;
    ch[index] = 1;
    for (let j = 1; j <= N; j++) {
      if (d[index] + arr[index][j] < d[j]) d[j] = d[index] + arr[index][j];
    }
  }
  d.forEach((a) => {
    if (a <= K) answer++;
  });
  return answer;
}
