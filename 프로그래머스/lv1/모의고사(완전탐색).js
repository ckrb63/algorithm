function solution(answers) {
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let i = 0;
  let cnt1 = 0,
    cnt2 = 0,
    cnt3 = 0;
  answers.forEach((e) => {
    if (e === p1[i % 5]) cnt1++;
    if (e === p2[i % 8]) cnt2++;
    if (e === p3[i % 10]) cnt3++;
    i++;
  });
  let answer = [];
  const max = Math.max(cnt1, cnt2, cnt3);
  if (cnt1 === max) answer.push(1);
  if (cnt2 === max) answer.push(2);
  if (cnt3 === max) answer.push(3);
  return answer;
}
