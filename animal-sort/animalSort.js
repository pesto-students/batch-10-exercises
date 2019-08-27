
function animalSort(animals) {
  if (animals.length === 0 || animals.length === 1) {
    return animals;
  }
  const sortByLegs = (a, b) => a.numberOfLegs - b.numberOfLegs;
  const sortByNames = (a, b) => a.name.localeCompare(b.name) > 0;
  return animals.sort((a, b) => (
    a.numberOfLegs === b.numberOfLegs ? sortByNames(a, b) : sortByLegs(a, b)
  ));
}

export {
  animalSort,
};
