
function allOfConditions(...callbacks) {
  return (input) => callbacks.every((cb) => cb(input));
}

export {
  allOfConditions,
};
