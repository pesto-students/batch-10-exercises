function squareNumbersArray(...numberArray) {
  const hasString = numberArray.find((value) => typeof value === 'string');
  if (hasString) {
    throw Error('My custom error');
  }
  const square = (number) => number ** 2;
  return numberArray.map(square);
}

export { squareNumbersArray };
