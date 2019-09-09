function cacheFunction(func) {
  const cache = {};
  return function(params) {
    const key = JSON.stringify(params);
    if (cache.hasOwnProperty(key)) {
      return cache[key];
    }
    cache[key] = func(params);
    return cache[key];
  };
}

export { cacheFunction };
