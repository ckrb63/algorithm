function solution(m, musicinfos) {
  let max = -1;
  let answer = "(None)";
  let shopCnt = 0;
  for (let i = 0; i < m.length; i++) if (m[i] === "#") shopCnt++;
  const arr = musicinfos.map((m) => {
    let [start, end, name, code] = m.split(",");
    start = start.slice(0, 2) * 60 + start.slice(3, 5) * 1;
    end = end.slice(0, 2) * 60 + end.slice(3, 5) * 1;
    if (end < start) end += 60 * 24;
    let time = end - start;
    let codeArr = [];
    for (let i = 0, j = 0; i < time; i++, j++) {
      if (code[(j + 1) % code.length] === "#") {
        codeArr.push(`${code[j % code.length]}${code[(j + 1) % code.length]}`);
        j++;
      } else codeArr.push(code[j % code.length]);
    }
    return { name, code: codeArr };
  });
  arr.forEach((a) => {
    const length = m.length - shopCnt;
    for (let i = 0; i <= a.code.length - length; i++) {
      if (a.code.slice(i, i + length).join("") === m) {
        if (a.code.length > max) {
          max = a.code.length;
          answer = a.name;
        }
      }
    }
  });
  return answer;
}
