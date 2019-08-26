function bind(fn, input, ...args) {
  return fn.bind(input, ...args);
}

export { bind };
