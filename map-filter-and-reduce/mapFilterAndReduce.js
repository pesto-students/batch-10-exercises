function mapFilterAndReduce(data) {
  const firstNames = (name) => name.firstName;
  const namesLessThan5Chars = (name) => name.length < 5;
  const nameAndLength = (obj, name) => ({ ...obj, [name]: name.length });

  return data
    .map(firstNames)
    .filter(namesLessThan5Chars)
    .reduce(nameAndLength, {});
}

export { mapFilterAndReduce };
