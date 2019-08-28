/* eslint-disable no-restricted-globals */

function negativeIndex(input) {
  if (!(input instanceof Array)) {
    throw new TypeError('Only arrays are supported');
  }
  const p = new Proxy(input, {
    get(target, propKey) {
      if (typeof propKey === 'string') {
        const maybeIndex = parseInt(propKey, 10);
        if (!isNaN(maybeIndex)) {
          const len = target.length;
          return target[(len + maybeIndex) % len];
        }
      }
      return target[propKey];
    },
    set(target, propKey, value) {
      const maybeIndex = parseInt(propKey, 10);
      if (!isNaN(maybeIndex)) {
        const len = target.length;
        const prop = (len + maybeIndex) % len;
        return Reflect.set(target, prop, value);
      }
      return true;
    },
  });
  return p;
}

export {
  negativeIndex,
};
