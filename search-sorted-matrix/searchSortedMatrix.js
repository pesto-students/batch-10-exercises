function searchSortedMatrix({ search, matrix }) {
  for (const row of matrix) {
    if (row.indexOf(search) !== -1) {
      return true;
    }
  }
  return false;
}

export { searchSortedMatrix };
