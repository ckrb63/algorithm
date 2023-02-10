function solution(expression) {
  const regex = /[+\-*]+/;
  let nums = expression.split(regex);
  let operators = [];
  const order = [];
  const set = new Set();
  const opType = [];
  let max = -1;
  for (let i = 0; i < expression.length; i++) {
    if (
      expression[i] === "+" ||
      expression[i] === "-" ||
      expression[i] === "*"
    ) {
      operators.push(expression[i]);
      set.add(expression[i]);
    }
  }
  set.forEach((v) => opType.push(v));
  const ch = Array.from({ length: set.size }, () => 0);
  function dfs(n, o) {
    if (order.length === set.size) {
      for (let i = 0; i < order.length; i++) {
        for (let j = 0; j < o.length; j++) {
          if (order[i] === o[j]) {
            const ev = eval(`${n[j]}${o[j]}${n[j + 1]}`);
            n = [...n.slice(0, j), ev, ...n.slice(j + 2, n.length)];
            o = [...o.slice(0, j), ...o.slice(j + 1, o.length)];
            j--;
          }
        }
      }
      n[0] = n[0] >= 0 ? n[0] : n[0] * -1;
      if (n[0] > max) max = n[0];
    } else {
      for (let i = 0; i < opType.length; i++) {
        if (ch[i] === 0) {
          ch[i] = 1;
          order.push(opType[i]);
          dfs([...n], [...o]);
          order.pop();
          ch[i] = 0;
        }
      }
    }
  }
  dfs([...nums], [...operators]);
  return max;
}
