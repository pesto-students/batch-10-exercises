
function cacheFunction(inputFn) {
  const cache = {};
  return (...args) => {
    const n = args[0];
    if (n in cache) {
      return cache[n];
    }
    const result = inputFn(n);
    cache[n] = result;
    return result;
  };
}

export {
  cacheFunction,
};
