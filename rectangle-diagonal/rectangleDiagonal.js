function rectangleDiagonal(firstSide, secondSide) {
  const getPower = num => power => num ** power;
  const sumOfSquaresOfSides = getPower(firstSide)(2) + getPower(secondSide)(2);
  const diagonal = getPower(sumOfSquaresOfSides)(0.5);
  return diagonal;
}

export { rectangleDiagonal };
