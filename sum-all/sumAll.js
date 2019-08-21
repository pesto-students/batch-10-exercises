
function sumAll(numbers) {
  // Sum of numbers within range can be calculated using
  // difference between their running sum.
  // using sum of numbers upto n (including n) = n*(n+1) / 2
  const [smallNumber, bigNumber] = numbers.sort((a, b) => (a - b));
  // eslint-disable-next-line no-mixed-operators
  const sumTill = (number) => number * (number + 1) / 2;
  return sumTill(bigNumber) - sumTill(smallNumber - 1);
}

export {
  sumAll,
};
