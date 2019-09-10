
function chunkArrayInGroups(array , chunkSize) {
  let responseArray = [];
  const arrayLength = array.length;
  const numberOfChunk = Math.ceil(arrayLength / chunkSize);

  for(let i = 1 ; i <= numberOfChunk ; i++){
    let newChunk = array.splice(0 , chunkSize);
    responseArray.push(newChunk);
  }
  return responseArray;
}

export {
  chunkArrayInGroups,
};
