function sumAll(arr) {
  const newArr = [...arr].sort();
  const numCount = Math.abs(newArr[0] - newArr[1]) + 1;
  const sum = ((newArr[0] + newArr[1]) * numCount) / 2;
  return sum;
}

export { sumAll };
