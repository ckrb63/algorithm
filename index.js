// * padStart => n개의 문자열 길이로 부족한 앞 부분을 특정 문자로 채우는 메소드

function solution(n, arr1, arr2) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    let answer = [];
    const temp1 = arr1[i].toString(2).padStart(n, "0").split("");
    const temp2 = arr2[i].toString(2).padStart(n, "0").split("");
    console.log(temp1, temp2);
    for (let j = 0; j < n; j++) {
      if (temp1[j] === "1" || temp2[j] === "1") answer.push("#");
      else answer.push(" ");
    }
    arr.push(answer.join(""));
  }
  return arr;
}

solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);
