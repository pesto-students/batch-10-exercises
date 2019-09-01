
function isOdd(input) {
  if (!(typeof input === 'number')) {
    throw new Error(`Expected number. Received ${typeof input}`);
  }
  return ((input % 2) === 1);
}

export {
  isOdd,
};
