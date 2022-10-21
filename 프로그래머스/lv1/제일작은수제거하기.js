// 문제 설명
// 정수를 저장한 배열,
// arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수,
// solution을 완성해주세요.
// 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요.
// 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고,
// [10]면 [-1]을 리턴 합니다.

function solution(arr) {
  const min = Math.min(...arr);
  const index = arr.indexOf(min);
  arr.splice(index, 1);
  return arr.length ? arr : [-1];
}

// * 배운점 : Math.min()에는 배열이 들어 갈 수 없기 때문에
// * ...arr 처럼 배열 원소를 펼쳐서 넣어주면 작동한다.
// * splice(startIndex, 제거하는 개수, 바꿀 값)인데 배열을 변화시키는
// * 함수이지만 자체 리턴은 없다.
