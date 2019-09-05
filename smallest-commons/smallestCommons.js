function smallestCommons(numArr) {
  const gcd = (a, b) => {
    if (b == 0) return a;
    return gcd(a, b % a);
  };
  const lcm = () => (num1 * num2) / gcd(num1, num2);
  const num1 = Math.min(numArr[0], numArr[1]);
  const num2 = Math.max(numArr[0], numArr[1]);
  let currentLcm = num1;
  while (num1 < num2) {
    currentLcm = lcm(currentLcm, num1);
  }
  return currentLcm;
}

export { smallestCommons };
