/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */

function limitFunctionCallCount(callback, limit) {
  return (...args) => ((limit-- > 0) ? callback(...args) : null);
}

export {
  limitFunctionCallCount,
};
