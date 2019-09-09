function threeSum(numArr, targetSum) {
  if (numArr.length < 3 || Number.isNaN(targetSum)) {
    throw new Error();
  }
  const sumOfAllNumbers = numArr.reduce((acc, el) => acc + el);
  if (sumOfAllNumbers < targetSum) {
    return null;
  } else if (sumOfAllNumbers === targetSum) {
    return numArr;
  } else {
    for (let i = 0; i <= numArr.length - 3; i += 1) {
      for (let j = i + 1; i <= numArr.length - 2; j += 1) {
        for (let k = j + 1; k <= numArr.length - 1; k += 1) {
          if (numArr[i] + numArr[j] + numArr[k] === targetSum) {
            return [numArr[i], numArr[j], numArr[k]];
          }
        }
      }
    }
  }
  return null;
}

export { threeSum };
