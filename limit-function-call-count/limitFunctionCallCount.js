function limitFunctionCallCount(fn, invokeCount) {
  let counter = 0;
  return (...args) => {
    counter += 1;

    if (counter > invokeCount) return null;

    return fn(...args);
  };
}

export { limitFunctionCallCount };
