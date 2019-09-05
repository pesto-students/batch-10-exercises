
function sumAll(Numbers) {
  Numbers.sort((a, b) => a - b);
  const lastNumber = ( Numbers ) => Numbers[Numbers.length - 1];
  let sum = 0;
  for(let i = Numbers[0]; i <= lastNumber(Numbers) ; i++  ){
    console.log(i);
    sum += i;
  }
  return sum;
}

export {
  sumAll,
};
