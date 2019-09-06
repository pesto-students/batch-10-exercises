function mergeAll(objectsList) {
  const mergedObj = {};
  objectsList.forEach(obj => {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        mergedObj[key] = obj[key];
      }
    }
  });
  return mergedObj;
}

export { mergeAll };
