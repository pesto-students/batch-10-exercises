function longestWordInString(inputString) {
  const inputStringSplit = inputString.split(' ');
  const lengthOfEachWord = inputStringSplit.map(word => word.length);
  const lengthOfLongestWord = Math.max(...lengthOfEachWord);
  return lengthOfLongestWord;
}

export { longestWordInString };
