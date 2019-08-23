
function findElement(array, testCondition) {
  for (let index = 0; index < array.length; index += 1) {
    const value = array[index];
    if (testCondition(value)) return value;
  }
  return undefined;
}

export {
  findElement,
};
