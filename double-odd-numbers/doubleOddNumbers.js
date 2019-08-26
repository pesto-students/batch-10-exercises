
function doubleOddNumbers(numbers) {
  const isOdd = (number) => number % 2 === 1;
  const oddNumbers = numbers.filter(isOdd);
  const double = (number) => number * 2;
  return oddNumbers.map(double);
}

export {
  doubleOddNumbers,
};
