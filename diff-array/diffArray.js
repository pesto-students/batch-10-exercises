/* eslint-disable function-paren-newline */
/* eslint-disable arrow-body-style */

function diffArray(firstArray, secondArray) {
  const isDiff = (element, ownArray, otherArray) => {
    return ownArray.includes(element) && !otherArray.includes(element);
  };
  return firstArray.filter((element) => isDiff(element, firstArray, secondArray)).concat(
    secondArray.filter((element) => isDiff(element, secondArray, firstArray)));
}

export {
  diffArray,
};
