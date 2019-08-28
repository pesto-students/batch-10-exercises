function searchSortedMatrix(obj) {
  const { search, matrix } = obj;
  const potentialArr = matrix.filter(arr => {
    return [arr[0] <= search && arr[arr.length - 1] >= search][0];
  });
  return potentialArr[0].includes(search);
}

export { searchSortedMatrix };
