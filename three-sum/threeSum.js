function threeSum(numArr, targetSum) {
  // const arrSum = arr => arr.reduce((sum, num) => sum + num);
  try {
    if (numArr.length < 3 || typeof targetSum !== 'number') {
      throw new Error();
    }
  } catch (e) {
    return e;
  }

  const curryAdder = a => b => c => a + b + c;
  for (let i = 0; i < numArr.length - 2; i += 1) {
    for (let j = i + 1; j < numArr.length - 1; j += 1) {
      for (let k = j + 1; k < numArr.length; k += 1) {
        if (curryAdder(numArr[i])(numArr[j])(numArr[k]) === targetSum) {
          return [numArr[i], numArr[j], numArr[k]];
        }
      }
    }
  }
  return null;
}
// console.log("threeSum(1,2,3) :", threeSum(1, 2, 3));

export { threeSum };
