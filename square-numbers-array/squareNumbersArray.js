
function squareNumbersArray(...maybeNumbers) {
  maybeNumbers.forEach(element => {
    if(typeof element !== 'number' ) {
      throw Error("My custom error");
    }
  });
 
  var numbers = maybeNumbers.map( (x)=>{ 
    return Math.pow(x,2) 
  });
  return numbers;
}

export {
  squareNumbersArray,
};
