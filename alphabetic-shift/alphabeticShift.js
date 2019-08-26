function alphabeticShift(inputString) {
  const letters = inputString.split('');
  const getCharCode = letter => letter.charCodeAt(0);
  const getNextLetter = letter => String.fromCharCode(getCharCode(letter) + 1);
  const newLetters = letters.map(letter => {
    return getNextLetter(letter);
  });
  return newLetters.join('');
}

export { alphabeticShift };
