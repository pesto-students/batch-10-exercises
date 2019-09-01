function isTriangle(...sides) {
  const largestSide = Math.max(...sides);
  const sumOfOtherSides = sides
    .filter(side => side !== largestSide)
    .reduce((sum, side) => sum + side);
  const isLargestSideLessThanSumOfOtherTwo = largestSide - sumOfOtherSides < 0;

  return isLargestSideLessThanSumOfOtherTwo;
}

export { isTriangle };
