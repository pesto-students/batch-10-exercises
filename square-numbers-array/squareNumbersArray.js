
function squareNumbersArray(mixedArray) {
  function checkIfNumbersArray(mixedArray) {
    mixedArray.forEach(element => {
      if (typeof element != 'number')
        return typeof element;
    });
    return true;
  }
  const numbersArray = [];
  const isNumbersArray=checkIfNumbersArray;
  if (isNumbersArray===true) {
    numbersArray = mixedArray;
  }
  else {
    throw Error(`Array of numbers expected. Found ${isNumbersArray}`)
  }
  return args;
}

export {
  squareNumbersArray,
};
