// 0부터 입력 값까지의 합을 재귀로 계산
function recursiveRange(number){
  if(number===0) return 0;
  return number + recursiveRange(number-1);
}