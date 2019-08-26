
function doubleOddNumbers(numberArray) {
  const oddNumberFilter = (num) => num % 2 !== 0;
  const double = (num) => num + num;

  return numberArray.filter(oddNumberFilter).map(double);
}

export {
  doubleOddNumbers,
};
