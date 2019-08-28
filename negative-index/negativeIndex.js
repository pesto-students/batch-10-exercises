function negativeIndex(originalArr) {
  const proxyArr = new Proxy(originalArr, {
    get(target, propKey) {
      return propKey < 0
        ? Reflect.get(target, target.length + parseInt(propKey))
        : Reflect.get(target, propKey);
    },
    set(target, propKey, value) {
      console.log(target, typeof propKey, value);
      return Reflect.set(
        target,
        target.length + (propKey % target.length),
        // parseInt(propKey) < 0
        //   ? target.length + parseInt("" + Symbol(propKey).toString())
        //   : propKey,
        value
      );
    }
  });
  return proxyArr;
}

export { negativeIndex };
