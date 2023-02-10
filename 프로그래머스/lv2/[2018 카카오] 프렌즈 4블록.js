function solution(m, n, board) {
  const arr = board.map((b) => b.split(""));
  let flag = 1;
  let count = 0;
  while (flag) {
    flag = 0;
    const ch = Array.from(Array(m), () => Array(n).fill(0));
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        if (arr[i][j]) {
          if (
            arr[i][j] === arr[i][j + 1] &&
            arr[i][j] === arr[i + 1][j] &&
            arr[i][j] === arr[i + 1][j + 1]
          ) {
            ch[i][j] = 1;
            ch[i][j + 1] = 1;
            ch[i + 1][j] = 1;
            ch[i + 1][j + 1] = 1;
            flag = 1;
          }
        }
      }
    }
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (ch[i][j] === 1) {
          arr[i][j] = null;
          count++;
        }
      }
    }
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
        if (arr[j][i] === null) {
          for (let k = j; k > 0; k--) arr[k][i] = arr[k - 1][i];
          arr[0][i] = null;
        }
      }
    }
  }
  return count;
}
