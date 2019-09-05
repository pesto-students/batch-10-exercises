
function rectangleDiagonal(length , breadth) {
  const lengthSq = Math.pow(length , 2 );
  const breadthSq = Math.pow(breadth , 2 );
  const diagonal  = Math.sqrt( lengthSq + breadthSq );
  return diagonal;
}

export {
  rectangleDiagonal,
};
