function bubbleSort1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// * 필요없는 반복 없애기(이미 바뀐 부분 빼기, 변화 없으면 break)
function bubbleSort2(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    let change = false;
    for (let j = 0; j < i; j++) {
      console.log(arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        change = true;
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    if (!change) break;
  }
  return arr;
}

console.log(bubbleSort2([7, 1, 2, 3, 4]));
