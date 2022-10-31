function solution(s) {
  const alpha = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
  ];
  while (1) {
    let cnt = 0;
    alpha.forEach((e, i) => {
      if (s.indexOf(e) !== -1) {
        const index = s.indexOf(e);
        const front = s.slice(0, index);
        const back = s.slice(index + e.length);
        s = `${front}${i}${back}`;
        cnt++;
      }
    });
    if (cnt === 0) break;
  }
  return s * 1;
}
