
function isOdd(...args) {
  // eslint-disable-next-line no-bitwise
  return (args & 1) ? true : false;
}

export {
  isOdd,
};
