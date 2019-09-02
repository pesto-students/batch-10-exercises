function mapObject(object, mapFn) {
  return Object.keys(object).reduce((result, key) => {
    result[key] = mapFn(object[key]);
    return result;
  }, {});
}

export { mapObject };
