
function modifyObjectKeys(obj, fn) {
  const outputObj = Object.create(obj);
  for (const prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      outputObj[fn(prop)] = obj[prop];
    }
  }
  return outputObj;
}

export {
  modifyObjectKeys,
};
