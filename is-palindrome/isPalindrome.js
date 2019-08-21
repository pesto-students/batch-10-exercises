
function isPalindrome(inputString) {
  function isAlphabet(inputCharacter) {
    const alphabetRegex = /^[a-zA-Z0-9]+$/;
    if (inputCharacter.match(alphabetRegex)) {
      return true;
    }
    return false;
  }
  function removeNonAlphabets(uncleanString) {
    let cleanedString = '';
    [...uncleanString].map((eachChar) => {
      cleanedString += isAlphabet(eachChar) ? eachChar : '';
    })
    return cleanedString;
  }
  const stringifiedLowercaseInput = inputString.toString().toLowerCase();
  const cleanedString = removeNonAlphabets(stringifiedLowercaseInput);

  const reversedString = cleanedString.split('').reverse().join('');
  return reversedString === cleanedString;


}

export {
  isPalindrome,
};
