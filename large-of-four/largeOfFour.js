function largeOfFour(numMatrix) {
  function getMaxInArr(arr) {
    return arr.reduce((a, b) => Math.max(a, b));
  }
  return numMatrix.map(row => getMaxInArr(row));
}

export { largeOfFour };
