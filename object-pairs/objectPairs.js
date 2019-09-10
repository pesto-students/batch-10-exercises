
function objectPairs(object1) {
  let newObject = [];
  for (let [key, value] of Object.entries(object1)) {
    newObject.push([key , value ]);
  }
  return newObject;
}
export {
  objectPairs,
};
