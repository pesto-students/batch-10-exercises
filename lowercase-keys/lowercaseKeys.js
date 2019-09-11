
function lowercaseKeys(object) {
  let newObject = {};
  for( let key  of Object.keys(object)){
    newObject[key.toLowerCase()] = object[key];
  }
  console.log(newObject);
  return newObject;
}

export {
  lowercaseKeys,
};
