function threeSum(numArr, targetSum) {
  function checkValidInputs(numArr) {
    if (numArr.length < 3 || Number.isNaN(targetSum)) {
      throw new Error();
    }
  }
  console.log("numArr", numArr);
  checkValidInputs(numArr, targetSum);
  console.log("numArr", targetSum);
  numArr.sort((a, b) => a - b);
  for (
    let firstPointer = 0;
    firstPointer < numArr.length - 2;
    firstPointer += 1
  ) {
    let leftPointer = firstPointer + 1;
    let rightPointer = numArr.length - 1;
    while (leftPointer < rightPointer) {
      if (
        numArr[firstPointer] + numArr[leftPointer] + numArr[rightPointer] ===
        targetSum
      ) {
        let indexArr = [firstPointer, leftPointer, rightPointer];
        indexArr = indexArr.sort((a, b) => b - a);
        return [numArr[indexArr[0]], numArr[indexArr[1]], numArr[indexArr[2]]];
      } else if (
        numArr[firstPointer] + numArr[leftPointer] + numArr[rightPointer] <
        targetSum
      ) {
        l += 1;
      } else {
        r += 1;
      }
    }
  }
  return null;
}

export { threeSum };
