
function doubleOddNumbers(numbers) {
  const filteredOddNumber = numbers.filter( ( number ) => {
    if(number % 2 != 0){
      return number;
    }
  });
  const doubledOddNumber = filteredOddNumber.map( number => number * 2);
  return doubledOddNumber;
}

export {
  doubleOddNumbers,
};
