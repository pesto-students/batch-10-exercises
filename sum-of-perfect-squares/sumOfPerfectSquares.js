function sumOfPerfectSquaresCalc(squareNumbers, num, index, count){

  if (index >= squareNumbers.length) {
    return Number.MAX_VALUE;
  }

  if (num < 0) {
    return Number.MAX_VALUE;
  }
  else if( num == 0 ){
    return count;
  }

  return Math.min ( sumOfPerfectSquaresCalc(squareNumbers, num, index+1, count),
                    sumOfPerfectSquaresCalc(squareNumbers, num-squareNumbers[index], index, count+1) );
}

function sumOfPerfectSquares(num) {

  var squareNumbers = [1];
  while(squareNumbers[squareNumbers.length-1] <= num){
    squareNumbers.push(Math.pow(squareNumbers.length+1, 2));
  }

  return sumOfPerfectSquaresCalc(squareNumbers, num, 0, 0, {min: Number.MAX_VALUE});
}

export {
  sumOfPerfectSquares,
};
