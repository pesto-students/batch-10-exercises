
function animalSort(animalArr) {
  const compareName = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };
  return animalArr
    .sort(compareName)
    .sort((a, b) => a.numberOfLegs - b.numberOfLegs);
}

export {
  animalSort,
};
