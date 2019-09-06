
function nthArg(index) {
  return (...args) => args[index];
}

export {
  nthArg,
};
