function squareNumbersArray(...numberArray) {
  const hasAllNumbers = numberArray.every((value) => typeof value === 'number');
  if (!hasAllNumbers) {
    throw new Error('My custom error');
  }
  const square = (number) => number ** 2;
  return numberArray.map(square);
}

export { squareNumbersArray };
