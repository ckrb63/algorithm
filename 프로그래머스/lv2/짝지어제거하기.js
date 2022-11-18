// ! stack을 활용해서 값을 삽입할때마다 검사하고 삭제해주면 n시간에 문제해결이 가능하다.

function solution(s) {
  const arr = s.split("");
  const stack = [];
  arr.forEach((e) => {
    if (stack.length > 0) {
      const cur = stack.at(-1);
      if (cur === e) {
        stack.pop();
        return;
      }
    }
    stack.push(e);
  });
  if (stack.length > 0) return 0;
  return 1;
}
