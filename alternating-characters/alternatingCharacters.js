/* eslint-disable arrow-parens */
function alternatingCharacters(words) {
  function countSymmetryBreakingChars(word) {
    const chars = word.split('');
    let counter = 0;
    chars.forEach((char, index) => {
      if (char === chars[index + 1]) {
        counter += 1;
      }
    });
    return counter;
  }
  const minDeletions = words.map(word => countSymmetryBreakingChars(word));
  return minDeletions;
}

export { alternatingCharacters };
