function cacheFunction(func) {
  const cachedResults = {};
  return (arg) => {
    // eslint-disable-next-line no-prototype-builtins
    if (!cachedResults.hasOwnProperty(arg)) {
      cachedResults[arg] = func(arg);
    }
    return cachedResults[arg];
  };
}

export {
  cacheFunction,
};
