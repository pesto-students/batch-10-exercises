function smallestCommons(numArr) {
  const max = Math.max(...numArr);
  const min = Math.min(...numArr);
  let smallestCommon = max;
  for (let i = max - 1; i >= min; i -= 1) {
    if (smallestCommon % i) {
      smallestCommon += max;
      i = max;
    }
  }
  return smallestCommon;
}

export { smallestCommons };
