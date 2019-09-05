function chunkArrayInGroups(arr, chunkSize) {
  const chunkedGroup = [];
  let sliceStartIndex = 0;
  let sliceEndIndex = chunkSize;
  while (sliceEndIndex < arr.length) {
    const slicedChunk = arr.slice(sliceStartIndex, sliceEndIndex);
    chunkedGroup.push(slicedChunk);
    sliceStartIndex += chunkSize;
    sliceEndIndex += chunkSize;
  }
  const lastChunk = arr.slice(sliceStartIndex, arr.length);
  chunkedGroup.push(lastChunk);
  return chunkedGroup;
}

export { chunkArrayInGroups };
