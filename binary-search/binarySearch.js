function binarySearch(...args) {
  const [arr, value, comparator] = [...args];

  if (comparator === undefined) {
    const comparator = function(a, b) {
      return a - b;
    };
  }
  console.log(arr, value, comparator);
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = parseInt(left + right) / 2;
    const comparison = comparator(value, arr[mid]);
    if (comparison === 0) {
      return mid;
    }
    if (value < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}

export { binarySearch };
