/* eslint-disable arrow-body-style */

function alphabeticShift(string) {
  const upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZA';
  const lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyza';
  const isLower = (character) => lowerCaseAlphabet.includes(character);
  const nextCharacter = (alphabet) => (character) => alphabet[alphabet.indexOf(character) + 1];
  const nextLowerCharacter = nextCharacter(lowerCaseAlphabet);
  const nextUpperCharacter = nextCharacter(upperCaseAlphabet);

  const characters = string.split('');
  const shiftedCharacters = characters.map((character) => {
    return isLower(character) ? nextLowerCharacter(character) : nextUpperCharacter(character);
  });
  return shiftedCharacters.join('');
}

export {
  alphabeticShift,
};
