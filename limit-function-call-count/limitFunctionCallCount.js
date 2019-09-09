function limitFunctionCallCount(func, callCount) {
  return function (...args) {
    callCount -= 1;
    return callCount > 0 ? func(...args) : null;
  };
}

export { limitFunctionCallCount };
