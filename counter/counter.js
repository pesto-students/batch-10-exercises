function counter(func) {
  const cache = {};
  return function(n) {
    const idx = !func ? 'undefined' : func.toString();
    cache[idx] = !(idx in cache) ? 1 : (cache[idx] += 1);
    return cache[idx];
  };
}

export { counter };
