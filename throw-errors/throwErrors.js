
function throwErrors(...args) {
  new ReferenceError('ReferenceError');
  return args;
}

export {
  throwErrors,
};
