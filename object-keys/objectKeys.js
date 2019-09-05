function objectKeys(inputObj) {
  const keys = [];
  for (const key in inputObj) {
    if (inputObj.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  return keys;
}

export { objectKeys };
