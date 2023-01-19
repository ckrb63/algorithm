function solution(n) {
  const arr = Array.from({ length: n.length }, () => 0);
  let isValid = false;
  function DFS(v) {
    if (v === n.length) {
      let sum1 = 0;
      let sum2 = 0;
      for (let i = 0; i < n.length; i++) {
        if (arr[i] === 0) sum1 += n[i];
        if (arr[i] === 1) sum2 += n[i];
      }
      if (sum1 === sum2) isValid = true;
    } else {
      arr[v] = 0;
      DFS(v + 1);
      arr[v] = 1;
      DFS(v + 1);
    }
  }
  DFS(0);
  return isValid;
}

console.log(solution([1, 2, 3, 4]));
