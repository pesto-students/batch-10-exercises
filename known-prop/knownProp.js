
function knownProp(inputObj) {
  const p = new Proxy(inputObj, {
    get(target, propKey) {
      if (propKey in target) {
        return target[propKey];
      }
      throw new TypeError('Unknown property');
    },
  });
  return p;
}

export {
  knownProp,
};
