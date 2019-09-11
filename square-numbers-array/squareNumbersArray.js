
function squareNumbersArray(...inputs) {
  let numbers = inputs.shift()
  let squares = numbers.map((number)=>{
    if(!parseInt(number)){
      throw new Error(`"${number}" must be number`);
    }
    return Math.pow(number , 2);
  });
  return squares;
}

export {
  squareNumbersArray,
};