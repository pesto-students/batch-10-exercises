
function mapObject(object1 , Fn) {
  let newObject = {};
  for (let [key, value] of Object.entries(object1)) {
    newObject[ key ] = Fn(value);
  }
  return newObject;
}

export {
  mapObject,
};
