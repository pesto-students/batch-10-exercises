
function limitFunctionCallCount(inputFn, callCount) {
  let fnCallCount = callCount;
  return (...args) => {
    if (fnCallCount === 0) {
      return null;
    }
    fnCallCount -= 1;
    return inputFn(...args);
  };
}

export {
  limitFunctionCallCount,
};
