function sumFibs(num) {
  function genFib(num) {
    const fib = [1];
    for (let i = 1; i <= num; ) {
      fib.push(i);
      i = fib[fib.length - 1] + fib[fib.length - 2];
    }
    return fib;
  }

  return genFib(num)
    .filter(el => el % 2 === 1)
    .reduce((prev, curr) => prev + curr);
}

export { sumFibs };
