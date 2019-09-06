function mergeAll(...args) {
  // const obj = Object.assign({}, ...args);
  return Object.assign.apply({}, ...args);
}

export { mergeAll };
