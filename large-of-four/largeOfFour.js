
function largeOfFour(arrays) {
  const maxReducer = (max, element) => (max > element ? max : element);
  return arrays.map((array) => array.reduce(maxReducer));
}

export {
  largeOfFour,
};
