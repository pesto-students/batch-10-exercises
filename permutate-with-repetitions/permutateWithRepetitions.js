function permutateWithRepetitions(lettersArray) {
  var totalPermutation = Math.pow ( lettersArray.length, lettersArray.length);

  var allPermutation = [];

  // to arrays
  for(let i = 0; i < totalPermutation; ++i) {
    var numberWithBase = i.toString(lettersArray.length);
    const numberWithBaseLen = numberWithBase.length;
    for(let j = 0; j < lettersArray.length - numberWithBaseLen; j++ ) {
      numberWithBase = "0" + numberWithBase;
    }
    console.log(numberWithBase);
    allPermutation.push(numberWithBase);
  }

  // map array to letters array
  return allPermutation;
}

export {
  permutateWithRepetitions,
};
