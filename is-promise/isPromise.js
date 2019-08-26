/* eslint-disable valid-typeof */

function isPromise(mayBePromise) {
  const isOfType = (type) => (object) => typeof object === type;
  const isObject = isOfType('object');
  const isFunction = isOfType('function');
  const isThenable = (object) => !!object && isFunction(object.then);
  return (isObject(mayBePromise) || isFunction(mayBePromise)) && isThenable(mayBePromise);
}

export {
  isPromise,
};
