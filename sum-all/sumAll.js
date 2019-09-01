
function sumAll(inputArray) {
  const getSum = (startNum, endNum) => {
    let sum = 0;
    let start = startNum;
    while (start < endNum + 1) {
      sum += start;
      start += 1;
    }
    return sum;
  };
  inputArray.sort((a, b) => a - b);
  const [start, end] = inputArray;
  return getSum(start, end);
}

export {
  sumAll,
};
