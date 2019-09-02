function pairwise(arr, arg) {
  const results = [];
  for (let i = 0; i <= arr.length - 2; i += 1) {
    for (let j = i + 1; j <= arr.length - 1; j += 1) {
      if (!results.includes(i) && !results.includes(j)) {
        if (arr[i] + arr[j] === arg) {
          results.push(i, j);
        }
      }
    }
  }
  return results.reduce((a, b) => a + b, 0);
}

export { pairwise };
