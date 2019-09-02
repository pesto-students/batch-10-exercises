function getIndexToIns(array, num) {
  const arraySorted = array.sort();
  const arrayLessThanNum = arraySorted.filter(el => el < num);
  const numInsertPosition = arrayLessThanNum.length;
  return numInsertPosition;
}

export { getIndexToIns };
