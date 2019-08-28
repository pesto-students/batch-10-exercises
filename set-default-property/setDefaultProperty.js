
function setDefaultProperty(object, defaultValue) {
  return new Proxy(object, {
    get(target, propKey) {
      if (!(propKey in target)) {
        return defaultValue;
      }
      return Reflect.get(target, propKey);
    },
  });
}

export {
  setDefaultProperty,
};
