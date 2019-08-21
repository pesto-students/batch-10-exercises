
function rot13(string) {
  const lowerCaseAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const upperCaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const rotate = (character) => {
    if (lowerCaseAlphabet.includes(character)) {
      return lowerCaseAlphabet[(lowerCaseAlphabet.indexOf(character) + 13) % 26];
    } if (upperCaseAlphabet.includes(character)) {
      return upperCaseAlphabet[(upperCaseAlphabet.indexOf(character) + 13) % 26];
    }
    return character;
  };
  return string.split('').map((character) => rotate(character)).join('');
}

export {
  rot13,
};
