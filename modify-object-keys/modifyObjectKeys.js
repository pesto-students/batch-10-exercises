function modifyObjectKeys(obj, modifierFunc) {
  const newObj = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const modifiedKey = modifierFunc(key);
      newObj[modifiedKey] = obj[key];
    }
  }
  return newObj;
}

export { modifyObjectKeys };
