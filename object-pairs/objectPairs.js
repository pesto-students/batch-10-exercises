function objectPairs(inputObj) {
  return Object.getOwnPropertyNames(inputObj).map(key => [key, inputObj[key]]);
}

export { objectPairs };
