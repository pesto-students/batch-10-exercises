
function objectValues(object1) {
  let newObject = [];
  for (let [key, value] of Object.entries(object1)) {
    newObject.push(value);
  }
  return newObject;
}

export {
  objectValues,
};
