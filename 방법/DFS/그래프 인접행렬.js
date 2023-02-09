function solution(length, arr, goal) {
  const graph = Array.from(Array(length + 1), () => Array(length + 1).fill(0));
  const ch = Array.from({ length: length + 1 }, () => 0);
  const path = [];
  let count = 0;
  console.log(graph);
  arr.forEach((e) => {
    graph[e[0]][e[1]] = 1;
  });
  function DFS(n, ch) {
    // console.log(n, ch);
    if (n === goal) {
      console.log(path);
      count++;
      return;
    }
    ch[n] = 1;
    for (let i = 1; i <= length; i++) {
      if (ch[i] === 0 && graph[n][i] === 1) {
        path.push(i);
        DFS(i, [...ch]);
        path.pop();
      }
    }
  }
  path.push(1);
  DFS(1, [...ch]);
  return count;
}
console.log(
  solution(
    5,
    [
      [1, 2],
      [2, 1],
      [1, 3],
      [1, 4],
      [2, 3],
      [3, 4],
      [4, 2],
      [2, 5],
      [4, 5]
    ],
    5
  )
);
