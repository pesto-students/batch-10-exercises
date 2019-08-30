const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const numbersArray = [...Array(number).keys()].slice(2);
  const numbersTillSqrt = numbersArray.filter((n) => n <= Math.sqrt(number));
  const factors = numbersTillSqrt.filter((n) => number % n === 0);
  return factors.length === 0;
};

function sumPrimes(limit) {
  const sum = (a, b) => a + b;

  const numbers = [...Array(limit + 1).keys()].slice(2);
  return numbers.filter(isPrime).reduce(sum);
}

export {
  sumPrimes,
};
