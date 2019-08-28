function negativeIndex(array) {
  const proxy = new Proxy(array, {
    get(target, property) {
      return Reflect.get(target, property);
    },
    has() {
      return true;
    },
  });
  return proxy;
}

export { negativeIndex };
