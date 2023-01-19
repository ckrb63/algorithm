function solution(numbers, hand) {
  const distance = [
    [0, 1, 2, 3],
    [4, 3, 2, 1],
    [3, 2, 1, 0],
    [4, 3, 2, 1],
    [3, 2, 1, 2],
    [2, 1, 0, 1],
    [3, 2, 1, 2],
    [2, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 2, 3],
    [1, 2, 3, 4],
    [1, 2, 3, 4]
  ];
  let currentLeft = 10;
  let currentRight = 11;
  let result = "";
  numbers.forEach((n) => {
    console.log(currentLeft, currentRight);
    if (n === 1 || n === 4 || n === 7) {
      currentLeft = n;
      result = result.concat("L");
    } else if (n === 3 || n === 6 || n === 9) {
      currentRight = n;
      result = result.concat("R");
    } else {
      let i = -1;
      if (n === 2) i = 3;
      if (n === 5) i = 2;
      if (n === 8) i = 1;
      if (n === 0) i = 0;
      if (distance[currentLeft][i] > distance[currentRight][i]) {
        result = result.concat("R");
        currentRight = n;
      } else if (distance[currentLeft][i] < distance[currentRight][i]) {
        result = result.concat("L");
        currentLeft = n;
      } else {
        if (hand === "right") {
          result = result.concat("R");
          currentRight = n;
        } else {
          result = result.concat("L");
          currentLeft = n;
        }
      }
    }
  });
  return result;
}
