/*
수열에서 연속부분수열의 합이 특정 숫자 N이 되는 경우가
몇번 있는지 구하는 문제

만약 N = 6
수열 1 2 1 3 1 1 1 2
[2, 1, 3], [1, 3, 1, 1], [3, 1, 1, 1] 로 3이다.

1.위의 문제는 투포인터 알고리즘으로 해결할 수 있다.
  두개의 포인터 LT, RT가 있을 때 
2.SUM에 더해진 값이 N보다 작으면 RT를 증가시키고 N보다
  크면 LT를 증가시킨다.
3.RT가 증가되면 RT가 가리키는 값을 더하고, LT가 증가되면
  LT가 이전에 가리키던 값을 빼준다.
4.SUM이 N과 같으면 COUNT를 증가시키고 LT를 증가시켜서 값을 빼준다.
5.다시 SUM은 N보다 작아지니 RT를 더해준다.
*/

function solution(n, m, arr) {
  let lt,
    rt,
    count = 0;
  let sum = arr[0];
  while (rt < n) {
    if (sum === m) {
      count++;
      sum -= arr[lt];
      lt++;
    } else if (sum < m) {
      rt++;
      sum += arr[rt];
    } else if (sum > m) {
      sum -= arr[lt];
      lt++;
    }
  }
  console.log(count);
  return count;
}
