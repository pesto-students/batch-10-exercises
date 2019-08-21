function binaryAgent(binaryString) {
  const arrayOfWordsInBinary = binaryString.split(/\s/)
  const arrayOfWordsInEnglish = arrayOfWordsInBinary.map(function (word) {
    return String.fromCharCode(parseInt(word, 2));
  });
  const englishString = arrayOfWordsInEnglish.join("")
  return englishString;
}

export {
  binaryAgent,
};