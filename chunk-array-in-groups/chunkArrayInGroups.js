
function chunkArrayInGroups(array, chunkSize) {
  const chunkyArray = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    chunkyArray.push(chunk);
  }
  return chunkyArray;
}

export {
  chunkArrayInGroups,
};
