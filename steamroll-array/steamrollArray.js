/* eslint-disable arrow-body-style */

function steamrollArray(array) {
  const steamRollReducer = (flatArray, element) => {
    return flatArray.concat(Array.isArray(element) ? steamrollArray(element) : element);
  };
  return array.reduce(steamRollReducer, []);
}

export {
  steamrollArray,
};
