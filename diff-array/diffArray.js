
function diffArray(...inputArrays) {
  if (inputArrays.length !== 2) {
    throw Error('Expected two array. Received ');
  }
  inputArrays.sort((firstArray, secondArray) => secondArray.length - firstArray.length);
  const [firstArray, secondArray] = inputArrays;
  firstArray.sort();
  secondArray.sort();
  let currentIndex;
  for (let i = 0; i < secondArray.length; i += 1) {
    currentIndex = firstArray.indexOf(secondArray[i]);
    if (currentIndex > -1) {
      firstArray.splice(currentIndex, 1);
    }
  }
  return firstArray;
}

export {
  diffArray,
};
