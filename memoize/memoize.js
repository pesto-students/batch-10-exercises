
function memoize(func) {
  var _func = func;
  var _resultMap = {};

  return (...args) => {
    if(!_resultMap.hasOwnProperty(args)){
      _resultMap[args] = _func(...args);   
    }
    return _resultMap[args];
  }
}

export {
  memoize,
};
