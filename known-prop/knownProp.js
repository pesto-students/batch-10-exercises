function knownProp(obj) {
  const proxy = new Proxy(obj, {
    get(target, property) {
      const isInvalidProperty = !Reflect.has(target, property);
      if (isInvalidProperty) {
        throw new TypeError(`Unknown property ${property}`);
      }
      return Reflect.get(target, property);
    },
  });
  return proxy;
}

export { knownProp };
