
function limitFunctionCallCount(func, maxCount) {

  var _func = func;
  var _maxCount = maxCount;
  var _currentCount = 0;
 
  return (...args) => { 
    if(_currentCount < _maxCount){
      _currentCount++;
      return _func(...args);
    } 
    else {
      return null;
    } 
  }
}

export {
  limitFunctionCallCount,
};
