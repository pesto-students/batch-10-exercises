
function binaryAgent(binaryString) {
  // eslint-disable-next-line guard-for-in
  const characters = binaryString.split(' ');
  // eslint-disable-next-line guard-for-in
  return characters.map((character) => String.fromCharCode(parseInt(character, 2))).join('');
}

export {
  binaryAgent,
};
