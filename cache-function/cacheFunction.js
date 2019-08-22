
function cacheFunction(func) {
  var cachedFuncResultMap = {}; 
  var cachedFunc = func;

  return (...args) => {
    if( !cachedFuncResultMap.hasOwnProperty(args) ){
      cachedFuncResultMap[args] = cachedFunc(...args);
    }
    return cachedFuncResultMap[args];
  }
}

export {
  cacheFunction,
};
