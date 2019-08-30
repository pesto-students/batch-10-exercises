
function rectangleDiagonal(length, breadth) {
  const square = (number) => number ** 2;
  const diagonal = Math.sqrt(square(length) + square(breadth));
  return diagonal;
}

export {
  rectangleDiagonal,
};
