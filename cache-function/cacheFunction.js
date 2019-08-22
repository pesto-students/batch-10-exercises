
function cacheFunction(func) {
  var cachedFuncResultMap = []; 
  var cachedFunc = func;

  return (val) => {
    if(cachedFuncResultMap[val] === undefined){
      cachedFuncResultMap[val] = cachedFunc(val);
    }
    return cachedFuncResultMap[val];
  }
}

export {
  cacheFunction,
};
