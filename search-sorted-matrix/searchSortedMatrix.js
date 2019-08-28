function searchSortedMatrix(obj) {
  const { search, matrix } = obj;
  const flatten = arr => arr.reduce((flat, next) => flat.concat(next), []);
  return flatten(matrix).includes(search);
}

export { searchSortedMatrix };
