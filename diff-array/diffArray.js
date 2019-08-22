function diffArray(firstArray, secondArray) {
  function checkIfElementExists(elementOfFirstArray, secondArray) {
    if (secondArray.indexOf(elementOfFirstArray) >= 0) {
      return true;
    }
    return false;
  }
  function getMergedArray(array1) {
    return (array2) => [...array1, ...array2]
  }
  function removeFromBothCopy(elementToBeRemoved) {
    firstArrayCopy = firstArrayCopy.filter(element => {
      return element != elementToBeRemoved;
    })
    secondArrayCopy = secondArrayCopy.filter(element => {
      return element != elementToBeRemoved;
    })
  }
  let firstArrayCopy = [...firstArray];
  let secondArrayCopy = [...secondArray];
  let symmetricDifference = [];
  for (const element of firstArray) {
    if (checkIfElementExists(element, secondArray)) {
      removeFromBothCopy(element)
    }
  }
  symmetricDifference = getMergedArray(firstArrayCopy)(secondArrayCopy)
  return symmetricDifference;
}

export {
  diffArray,
};
