
function binaryAgent(binaryInput) {
  return binaryInput.split(' ').map((currentValue) => String.fromCharCode(parseInt(currentValue, 2))).join(' ');
}

export {
  binaryAgent,
};
