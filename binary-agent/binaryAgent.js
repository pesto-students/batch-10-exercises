
function binaryAgent(binaryString) {
  function getASCIICharacter(eachBinaryCharacter) {
    const equivalentDecimal = parseInt(eachBinaryCharacter, 2)
    const ASCIICharacter = String.fromCharCode(equivalentDecimal)
    return ASCIICharacter
  }
  const binaryCharactersArray = String(binaryString).split(' ');
  let result = '';
  binaryCharactersArray.map(eachBinaryCharacter =>
    result += getASCIICharacter(eachBinaryCharacter));
  return result;
}

export {
  binaryAgent,
};
