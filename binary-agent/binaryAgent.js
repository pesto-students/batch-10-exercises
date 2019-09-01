
function binaryAgent(binaryInput) {
  const inputArray = binaryInput.split(' ');
  return inputArray.map(
    (currentValue) => String.fromCharCode(parseInt(currentValue, 2)),
  ).join(' ');
}

export {
  binaryAgent,
};
