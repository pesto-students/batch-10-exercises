function objectPairs(obj) {
  return Object.keys(obj).map(key => {
    return [key, obj[key]];
  });
}

export { objectPairs };
