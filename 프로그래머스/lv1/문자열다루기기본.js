function solution(s) {
  if (s.split("").find((e) => e === "e")) return false;
  if (isNaN(s * 1)) return false;
  if (s.length === 4 || s.length === 6) return true;
  return false;
}

// 문자열에 e가 포함되어있는 경우 지수 표기법으로 인식될 수 있다. 즉 e를 예외처리해주지 않으면
// 예상과 다르게 NaN이 되지 않고 제대로 숫자로 변환될 가능성이 있다.
