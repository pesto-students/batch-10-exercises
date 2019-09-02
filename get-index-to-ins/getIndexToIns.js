function getIndexToIns(unsortedArr, insertValue) {
  const unsortedArrCopy = [...unsortedArr];
  unsortedArrCopy.sort((a, b) => a - b);
  const sortedArr = unsortedArrCopy;
  for (let index = 0; index < sortedArr.length; index += 1) {
    if (sortedArr[index] >= insertValue) {
      return index;
    }
  }
  return sortedArr.length;
}

export { getIndexToIns };
