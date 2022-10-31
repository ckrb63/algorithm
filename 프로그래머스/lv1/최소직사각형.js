// 긴 변 집합, 짧은 변 집합 각각의 최대값을 곱을 구한다

function solution(sizes) {
  let longArr = [];
  let shortArr = [];
  sizes.forEach((size) => {
    longArr.push(Math.max(...size));
    shortArr.push(Math.min(...size));
  });
  return Math.max(...longArr) * Math.max(...shortArr);
}
