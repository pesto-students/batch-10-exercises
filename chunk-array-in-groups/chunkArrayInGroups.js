function chunkArrayInGroups(array, size) {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += 1) {
    const last = chunkedArr[chunkedArr.length - 1];
    if (!last || last.length === size) {
      chunkedArr.push([array[i]]);
    } else {
      last.push(array[i]);
    }
  }
  return chunkedArr;
}

export { chunkArrayInGroups };
