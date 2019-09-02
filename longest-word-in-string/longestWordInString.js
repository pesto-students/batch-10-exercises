function longestWordInString(inputStr) {
  const lengthsOfWords = inputStr.split(' ').map(word => word.length);
  return lengthsOfWords.reduce((a, b) => Math.max(a, b));
}

export { longestWordInString };
