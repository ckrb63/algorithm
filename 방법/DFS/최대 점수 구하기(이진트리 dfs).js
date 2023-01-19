function solution(n, time, arr) {
  let max = Number.MIN_SAFE_INTEGER;
  function DFS(v, sum, t) {
    if (t > time) return;
    if (v === n) {
      if (sum > max) max = sum;
    } else {
      DFS(v + 1, sum + arr[v][0], t + arr[v][1]);
      DFS(v + 1, sum, t);
    }
  }
  DFS(0, 0, 0);
  return max;
}

console.log(
  solution(5, 20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4]
  ])
);
