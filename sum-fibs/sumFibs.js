
function sumFibs(limit) {
  const fibonacciTill = (number) => {
    const fibs = [1, 1];
    let [first, second] = fibs;
    let third = first + second;
    while (third < number) {
      fibs.push(third);
      first = second;
      second = third;
      third = first + second;
    }
    return fibs;
  };
  const isOdd = (number) => number % 2 === 1;
  const sum = (a, b) => a + b;
  return fibonacciTill(limit).filter(isOdd).reduce(sum);
}

export {
  sumFibs,
};
