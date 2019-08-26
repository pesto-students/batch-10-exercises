
function tripleAndFilter(array) {
  const triple = (number) => number * 3;
  const tripledArray = array.map(triple);
  const filteredArray = tripledArray.filter((number) => number % 15 === 0);
  return filteredArray;
}

export {
  tripleAndFilter,
};
