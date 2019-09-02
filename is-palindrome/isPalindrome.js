function isPalindrome(input) {
  const str = input.toString();
  const strLowerCase = str.toLowerCase();
  // Regex to remove unwated characters
  const unwantedCharRegex = /[\W_]/g;
  const strCleaned = strLowerCase.replace(unwantedCharRegex, '');
  const strReversed = strCleaned
    .split('')
    .reverse()
    .join('');
  return strCleaned === strReversed;
}

export { isPalindrome };
