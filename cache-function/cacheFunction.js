function cacheFunction(func) {
  const cache = {};
  return function(n) {
    const idx = n.toString();
    if (!(idx in cache)) {
      cache[idx] = func(n);
    }
    return cache[idx];
  };
}

export { cacheFunction };
