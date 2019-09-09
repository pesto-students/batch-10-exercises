function sumFibs(num) {
  function getFibonacciNumbers(limit) {
    const fibs = [0, 1];
    let currentFib = 1;
    while (true) {
      currentFib = fibs[fibs.length - 1] + fibs[fibs.length - 2];
      if (currentFib > limit) break;
      fibs.push(currentFib);
    }
    return fibs;
  }
  return getFibonacciNumbers(num).reduce(
    (sum, el) => sum + (el % 2 === 0 ? 0 : el)
  );
}

export { sumFibs };
