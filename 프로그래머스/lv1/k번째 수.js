// ! 숫자를 정렬할 때는 무조건 sort((a,b)=>a-b) 형식으로 해야한다

function solution(array, commands) {
  let answer = [];
  commands.map((command) => {
    const value = array.slice(command[0] - 1, command[1]).sort((a, b) => a - b);
    answer.push(value[command[2] - 1]);
  });
  return answer;
}
