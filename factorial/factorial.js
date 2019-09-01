
function factorial(input) {
  if (!(typeof input === 'number')) {
    throw new Error(`Expected number. Received ${typeof input}`);
  }
  if (input === 0) {
    return 1;
  }
  return input * factorial(input - 1);
}

export {
  factorial,
};
