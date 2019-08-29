function binarySearch(inputArr, searchTerm, customComparator) {
  const comparator = customComparator
    ? customComparator
    : (a, b) => {
        if (a === b) return 0;
        return a < b ? -1 : 1;
      };
  const bSearch = searchTerm => sortedArr => {
    if (sortedArr.length === 0) {
      console.log("emptyArr :", sortedArr.length);
      return -1;
    }
    // console.log("searchTerm, sortedArr :", searchTerm, sortedArr);
    const midPointerPosition = Math.floor(sortedArr.length / 2);
    const valueAtMid = sortedArr[midPointerPosition];
    return comparator(searchTerm, valueAtMid) === 0
      ? midPointerPosition
      : comparator(searchTerm, valueAtMid) === 1
      ? bSearch(searchTerm)(sortedArr.slice(midPointerPosition))
      : comparator(searchTerm, valueAtMid) === -1
      ? bSearch(searchTerm)(sortedArr.slice(0, midPointerPosition))
      : null;
  };
  const searchTermExists = bSearch(searchTerm)(inputArr);
  return searchTermExists;
}

export { binarySearch };
