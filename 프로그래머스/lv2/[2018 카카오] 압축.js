function solution(msg) {
  const alpha = Array.from({ length: 26 }, (v, i) => [
    String.fromCharCode(i + 65),
    i + 1
  ]);
  const arr = msg.split("");
  const hash = new Map(alpha);
  const answer = [];
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    const temp = str + arr[i];
    if (hash.has(temp)) {
      if (i === arr.length - 1) answer.push(hash.get(temp));
      str += arr[i];
      continue;
    }
    hash.set(temp, hash.size + 1);
    answer.push(hash.get(str));
    str = "";
    i--;
  }
  return answer;
}
