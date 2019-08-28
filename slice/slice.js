
function slice(startIndex, endIndex, inputArray) {
  const arrayLen = inputArray.length;
  const endIndexInRange = endIndex >= arrayLen ? endIndex : (arrayLen + endIndex) % arrayLen;
  const startIndexInRange = startIndex >= 0 ? startIndex : (arrayLen + startIndex) % arrayLen;
  const outputArray = [...inputArray]
    // .slice(startIndex, endIndex)
    .filter((value, index) => index < endIndexInRange && index >= startIndexInRange);
  if (typeof inputArray === 'string') {
    return outputArray.join('');
  }
  return outputArray;
}

export {
  slice,
};
