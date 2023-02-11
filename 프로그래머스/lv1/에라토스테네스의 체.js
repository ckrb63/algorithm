function solution(n) {
  const dp = Array.from({ length: n + 1 }, () => 0);
  let answer = 0;
  for (let i = 2; i < dp.length; i++) {
    if (dp[i] === 0) {
      answer++;
      for (let j = i * i; j <= n; j += i) dp[j] = 1;
    }
  }
  return answer;
}
