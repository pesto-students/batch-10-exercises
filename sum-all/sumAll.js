function sortNumbers(a, b) {
  return a - b;
}

function sumAll(numberArray) {
  const [firstNumber, lastNumber] = numberArray.sort(sortNumbers);
  let result = 0;
  let count = firstNumber;

  while (count <= lastNumber) {
    result += count;
    count += 1;
  }

  return result;
}

export { sumAll };
