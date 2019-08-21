
function cacheFunction(fn) {
  let prevArg = null;
  let cachedResult = null;
  return (arg) => {
    if (prevArg === arg) return cachedResult;
    prevArg = arg;
    cachedResult = fn(arg);
    return cachedResult;
  };
}

export {
  cacheFunction,
};
