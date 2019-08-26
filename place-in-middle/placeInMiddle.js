function placeInMiddle(firstArray, secondArray) {
  if (firstArray.length == 0) {
    return secondArray;
  } else if (firstArray.length == 1) {
    return secondArray.concat(firstArray);
  }
  const middleIndex = firstArray.length / 2;
  const correctedMiddleIndex = Number.isInteger(middleIndex)
    ? middleIndex
    : middleIndex + 0.5;
  const firstHalf = firstArray.slice(0, correctedMiddleIndex);
  const secondHalf = firstArray.slice(correctedMiddleIndex, firstArray.length);
  const combinedArray = firstHalf.concat(secondArray, secondHalf);
  return combinedArray;
}

export { placeInMiddle };
