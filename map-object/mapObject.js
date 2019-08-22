
function mapObject(inputObject) {
  let mappedObject = {};
  for (const key in inputObject) {
    if (inputObject.hasOwnProperty(key)) {
      let squaredElement = inputObject[key] ** 2;
      mappedObject[key] = squaredElement;
    }
  }
  return mappedObject;
}

export {
  mapObject,
};
