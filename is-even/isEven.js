
function isEven(...args) {
  // eslint-disable-next-line no-bitwise
  return !(args & 1);
}

export {
  isEven,
};
