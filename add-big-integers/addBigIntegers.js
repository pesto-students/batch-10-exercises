function addBigIntegers(numberString) {
  const WHITE_SPACE = /\s/;
  let count = 0;
  let total = 0;

  const split = numberString.split(WHITE_SPACE);
  const [noOfTimes, ...numbers] = split;
  while (count < noOfTimes) {
    total += Number(numbers[count]);
    count += 1;
  }
  return total.toFixed();
}

export { addBigIntegers };
