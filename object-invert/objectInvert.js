
function objectInvert(object1) {
  let newObject = {};
  for (let [key, value] of Object.entries(object1)) {
    newObject[ value ] = key;
  }
  return newObject;
}

export {
  objectInvert,
};
