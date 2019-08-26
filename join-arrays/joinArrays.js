
function joinArrays(...arrays) {
  const concatArrays = (someArray, otherArray) => someArray.concat(otherArray);
  const joinedArray = arrays.reduce(concatArrays, []);
  return joinedArray;
}

export {
  joinArrays,
};
