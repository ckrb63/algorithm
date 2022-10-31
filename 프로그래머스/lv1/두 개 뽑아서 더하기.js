// ! findIndex 와 indexOf는 다른 메소드이다. 헷갈리지 말자
// ! findIndex는 인자로 callback함수를 받고, indexOf는 값을 받는다.

function solution(numbers) {
  const arr = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (arr.indexOf(numbers[i] + numbers[j]) === -1)
        arr.push(numbers[i] + numbers[j]);
    }
  }
  arr.sort((a, b) => a - b);
  return arr;
}
