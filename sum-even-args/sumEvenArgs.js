
function sumEvenArgs(...args) {
  const isEven = (number) => number % 2 === 0;
  const evenArgs = args.filter(isEven);
  const sum = (a, b) => a + b;
  return evenArgs.reduce(sum, 0);
}

export {
  sumEvenArgs,
};
