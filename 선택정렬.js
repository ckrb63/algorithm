// ! 선택 정렬은 전체를 돌면서 가장 작은 값을 맨 앞(헌재 인덱스)
// ! 와 바꾸는 작업을 반복하여 정렬하는 방식

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (min !== i) {
      const temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([1, 3, 33, 2, 12, 44, -3]));
