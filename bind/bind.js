
function bind(fn, thisArg, ...args) {
  return fn.bind(thisArg, ...args);
}

export {
  bind,
};
