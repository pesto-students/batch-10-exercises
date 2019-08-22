/* eslint-disable no-restricted-globals */

function squareNumbersArray(...array) {
  const isNumber = (value) => typeof value === 'number';
  if (!array.every(isNumber)) {
    throw new Error('Expected numbers as array elements');
  }
  return array.map((element) => element ** 2);
}

export {
  squareNumbersArray,
};
