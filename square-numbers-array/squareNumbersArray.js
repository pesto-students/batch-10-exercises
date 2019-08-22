
function squareNumbersArray(...unsanitizedArray) {
  function checkIfNumbers(unsanitizedArray) {
    for (const element of unsanitizedArray) {
      if (isNaN(element)) {
        return typeof element;
      }
    }
    return true;
  }
  let squaredNumbers = [];
  const isNumbers = checkIfNumbers(unsanitizedArray);
  if (isNumbers === true) {
    let numbers = unsanitizedArray;
    squaredNumbers = numbers.map(element => Math.pow(element, 2));
  }
  else {
    throw new Error(`Array of numbers expected. Found ${isNumbers}`);
  }
  return squaredNumbers;
}

// function squareNumbersArray(...unsanitizedArray) {
//   let squaredNumbers = [];
//   if (unsanitizedArray.every(element => !isNaN(element))) {
//     let numbers = unsanitizedArray;
//     squaredNumbers = numbers.map(element => element ** 2);
//   }
//   else {
//     throw new Error(`Array of numbers is expected. `)
//   }
//   return squaredNumbers;
// }

export {
  squareNumbersArray,
};
