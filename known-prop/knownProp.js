function knownProp(obj) {
  const objProxy = new Proxy(obj, {
    get(target, propKey) {
      if (propKey in target) {
        return target[propKey];
      }
      throw new TypeError('Unknown property');
    }
  });
  return objProxy;
}

export { knownProp };
