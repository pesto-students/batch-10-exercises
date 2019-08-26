
function mapFilterAndReduce(arrayOfObjects) {
  const firstNamesArray = arrayOfObjects.map((object) => object.firstName);
  const arrayWithShortNames = firstNamesArray.filter((name) => name.length < 5);
  const namesAndLengthsObject = arrayWithShortNames.reduce((object, name) => ({
    ...object,
    [name]: name.length,
  }), {});
  return namesAndLengthsObject;
}

export {
  mapFilterAndReduce,
};
