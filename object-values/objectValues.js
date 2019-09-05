function objectValues(inputObj) {
  return Object.getOwnPropertyNames(inputObj).map(key => inputObj[key]);
}

export { objectValues };
