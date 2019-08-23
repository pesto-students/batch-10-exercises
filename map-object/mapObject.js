
function mapObject(object, mapFunction) {
  const keys = Object.keys(object);
  const mappedObject = {};
  for (let index = 0; index < keys.length; index += 1) {
    const key = keys[index];
    mappedObject[key] = mapFunction(object[key]);
  }
  return mappedObject;
}

export {
  mapObject,
};
