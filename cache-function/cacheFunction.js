
function cacheFunction(inputFn) {
  const cache = {};
  return (...args) => {
    const input = args[0];
    if (input in cache) {
      return cache[input];
    }
    const result = inputFn(input);
    cache[input] = result;
    return result;
  };
}

export {
  cacheFunction,
};
