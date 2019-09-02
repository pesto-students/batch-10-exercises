function binaryAgent(binaryString) {
  const WordsInBinary = binaryString.split(/\s/);
  const WordsInEnglish = WordsInBinary.map(word =>
    String.fromCharCode(parseInt(word, 2))
  );
  const englishString = WordsInEnglish.join('');
  return englishString;
}

export { binaryAgent };
