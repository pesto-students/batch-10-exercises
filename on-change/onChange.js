
function onChange(input, inputFn) {
  const p = new Proxy(input, {
    get(target, propKey) {
      inputFn();
      return target[propKey];
    },
    defineProperty(target, propKey, value) {
      inputFn();
      return Reflect.defineProperty(target, propKey, value);
    },
    set(target, propKey, value) {
      inputFn();
      return Reflect.set(target, propKey, value);
    },
    deleteProperty(target, propKey) {
      inputFn();
      return Reflect.deleteProperty(target, propKey);
    },
  });
  return p;
}

export {
  onChange,
};
