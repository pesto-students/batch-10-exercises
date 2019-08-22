
function alternatingCharacters(strings) {
  return strings.map((string) => {
    const characters = string.split('');
    let numberOfDeletions = 0;
    characters.reduce((previousCharacter, currentCharacter) => {
      if (previousCharacter === currentCharacter) {
        numberOfDeletions += 1;
      }
      return currentCharacter;
    });
    return numberOfDeletions;
  });
}

export {
  alternatingCharacters,
};
