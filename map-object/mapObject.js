
function mapObject(inputObject) {
  const mappedObject = {};
  for (const key in inputObject) {
    if (inputObject.hasOwnProperty(key)) {
      const squaredElement = inputObject[key] ** 2;
      mappedObject[key] = squaredElement;
    }
  }
  return mappedObject;
}

export {
  mapObject,
};
