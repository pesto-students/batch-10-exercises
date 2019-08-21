function factorial(num) {
  if (typeof num !== 'number') throw Error('Argument must be a number');
  if (num === 0) return 1;
  return num * factorial(num - 1);
}

export { factorial };
