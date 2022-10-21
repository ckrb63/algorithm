// ! 삽입 정렬은 한번에 하나의 항목을 올바른 위치에 삽입해서
// ! 배열의 정렬된 부분을 점진적으로 구축하는 정렬

function insertionSort(arr) {
  for (i = 1; i < arr.length; i++) {
    const value = arr[i];
    for (j = i - 1; j >= 0; j--) {
      if (arr[j] < arr[i]) break;
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = value;
  }
  return arr;
}

console.log(insertionSort([3, 1, 5, 222, 45]));
