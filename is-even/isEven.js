
function isEven(input) {
  if (!(typeof input === 'number')) {
    throw new Error(`Expected number. Received ${typeof input}`);
  }
  return ((input % 2) === 0);
}

export {
  isEven,
};
