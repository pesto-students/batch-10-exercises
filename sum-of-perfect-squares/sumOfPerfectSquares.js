function sumOfPerfectSquares(num) {
  const getPower = num => power => Math.pow(num, power);
  const createArrOfSquares = num => {
    const squareArr = [];
    let x = 1;
    while (getPower(x)(2) <= num) {
      squareArr.push(getPower(x)(2));
      x += 1;
    }
    return squareArr;
  };
  if (num <= 3) {
    return num;
  }
  let squareArr = createArrOfSquares(num);
  squareArr.sort((a, b) => a - b);
}

export { sumOfPerfectSquares };
