function sumPrimes(num) {
  const isPrime = num => {
    for (let i = 2; i < num; i += 1) if (num % i === 0) return false;
    return num > 1;
  };
  const generateRange = (from, to) =>
    Array.from({ length: to - from + 1 }, (v, k) => k + from);
  return generateRange(2, num)
    .filter(el => isPrime(el))
    .reduce((prev, curr) => prev + curr);
}

export { sumPrimes };
