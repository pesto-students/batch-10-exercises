function pairwise(arr, total) {
  const pairIndexSums = [];
  for (let i = 0; i <= arr.length; i += 1) {
    for (let j = i + 1; j <= arr.length; j += 1) {
      if (arr[i] + arr[j] === total) {
        pairIndexSums.push(i + j);
        i += 1;
        j += 1;
      }
    }
  }
  if (pairIndexSums.length > 0) {
    return pairIndexSums.reduce((a, b) => a + b);
  }
  return 0;
}

export { pairwise };
