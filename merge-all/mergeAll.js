
function mergeAll(listOfObjects) {
  let ConactedObject = {};
  listOfObjects.forEach(Item => {
    ConactedObject = Object.assign( ConactedObject , Item);
  });
  return ConactedObject;
}

export {
  mergeAll,
};
