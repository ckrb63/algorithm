function solution(x, y, n) {
  const queue = [];
  queue.push([x, 0]);
  let index = 0;
  let answer = -1;
  const ch = Array.from({ length: y + 1 }, () => 0);
  while (index < queue.length) {
    const [num, count] = queue[index];
    if (num === y) {
      answer = count;
      break;
    }
    index++;
    if (ch[num + n] === 0 && num + n <= y) {
      queue.push([num + n, count + 1]);
      ch[num + n] = 1;
    }
    if (ch[num * 2] === 0 && num * 2 <= y) {
      queue.push([num * 2, count + 1]);
      ch[num * 2] = 1;
    }
    if (ch[num * 3] === 0 && num * 3 <= y) {
      queue.push([num * 3, count + 1]);
      ch[num * 3] = 1;
    }
  }
  return answer;
}
