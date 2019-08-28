
function searchSortedMatrix(input) {
  const { search, matrix } = input;
  return matrix
    .filter((el) => el.indexOf(search) > -1)
    .length > 0;
}

export {
  searchSortedMatrix,
};
