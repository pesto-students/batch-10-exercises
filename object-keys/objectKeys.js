
function objectKeys(object1) {
  let newObject = [];
  for (let [key, value] of Object.entries(object1)) {
    newObject.push( key );
  }
  return newObject;
}

export {
  objectKeys,
};
