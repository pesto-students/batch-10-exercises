function sumPrimes(limit) {
  function isPrime(maybePrime) {
    if (maybePrime === 0 || maybePrime === 1) {
      return false;
    }
    for (let i = 2; i < maybePrime; i += 1) {
      if (maybePrime % i === 0) {
        return false;
      }
    }
    return true;
  }
  function* primeNumberGenerator() {
    let i = 0;
    while (true) {
      if (isPrime(i)) {
        yield i;
      }
      i += 1;
    }
  }
  function getPrimes(upToLimit) {
    const png = primeNumberGenerator();
    const primeNumbers = [];
    while (true) {
      const primeNo = png.next().value;
      if (primeNo > upToLimit) {
        break;
      } else {
        primeNumbers.push(primeNo);
      }
    }
    return primeNumbers;
  }
  return getPrimes(limit).reduce((sum, el) => sum + el);
}

export { sumPrimes };
