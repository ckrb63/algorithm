// * charCodeAt() 메소드로 문자의 아스키 코드를 얻을 수 있다.
// ! sort 함수는 기본적으로 문자열을 사전 순으로 정렬하지만, 특정 조건을 추가해서 하고 싶으면
// ! if 문을 통해서 return을 설정하면 된다.

function solution(strings, n) {
  const answer = strings.sort((a, b) => {
    if (a[n] === b[n]) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    }
    return a[n].charCodeAt() - b[n].charCodeAt();
  });
  return answer;
}
