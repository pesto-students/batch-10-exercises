
function largeOfFour(numbersArray) {
  let largestOfFourNumbers;
  largestOfFourNumbers = numbersArray.map( function( numbers ){
    let largestNumber = numbers.sort((a, b) => b - a).shift();
    return(largestNumber);
  })
  return largestOfFourNumbers;
}

export {
  largeOfFour,
};
