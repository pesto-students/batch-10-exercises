function objectInvert(inputObj) {
  const invertedObj = {};
  for (const key of Object.getOwnPropertyNames(inputObj)) {
    invertedObj[inputObj[key]] = key;
  }
  return invertedObj;
}

export { objectInvert };
