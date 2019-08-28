function knownProp(obj) {
  const proxy = new Proxy(obj, {
    get(target, property) {
      // eslint-disable-next-line no-prototype-builtins
      const isInvalidProperty = !target.hasOwnProperty(property);
      if (isInvalidProperty) {
        throw new TypeError(`Unknown property ${property}`);
      }
      return Reflect.get(target, property);
    },
  });
  return proxy;
}

export { knownProp };
