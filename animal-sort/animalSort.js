
function animalSort(list) {
  let sortable = [];
  for (let item of list) {
    sortable.push([ item , item.numberOfLegs  ]);
  }

  sortable.sort(function (a, b) {
    return a[1] - b[1];
  });
  const sortedAnimalData = sortable.map(( animal )=> animal[0]);
  return sortedAnimalData;
}

export {
  animalSort,
};
