
function knownProp(object) {
  return new Proxy(object, {
    get(target, propKey) {
      if (!target.hasOwnProperty(propKey)) {
        throw new TypeError(`Unknown property : ${propKey}`);
      }
      return target[propKey];
    },
  });
}

export {
  knownProp,
};
