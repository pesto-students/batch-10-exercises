
function updateObject(idx, val, arr) {
  return (function (value) {
    return function (array) {
      const arrLen = array.length;
      idx = (idx + arrLen) % arrLen;
      array[idx] = value;
      return array;
    };
  }(val))(arr);
  // const arrLen = arr.length;
  // return (function (inputArray) {
  //   inputArray[(index + arrLen) % arrLen] = value;
  //   return inputArray;
  // }(arr));
  // inputArray[(index + arrLen) % arrLen] = value;
  // return inputArray;
}

export {
  updateObject,
};
