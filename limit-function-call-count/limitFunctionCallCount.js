function limitFunctionCallCount(fn, n) {
  let runCount = 0;
  return function cb(...args) {
    if (runCount < n) {
      runCount += 1;
      return fn(...args);
    }
    return null;
  };
}

export { limitFunctionCallCount };
