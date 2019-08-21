
function isPalindrome(inputString) {
  inputString = inputString.toLowerCase();
  let cleanedString = removeNonAlphabets(inputString);

  let reversedString = cleanedString.split('').reverse().join('');
  return reversedString === cleanedString;
  function removeNonAlphabets(inputString) {
    let cleanedString = "";
    [...inputString].map((eachChar) => {
      cleanedString += isAlphabet(eachChar) ? eachChar : "";
    })
    return cleanedString;
  }
  function isAlphabet(inputCharacter) {
    let alphabetRegex = /^[a-zA-Z0-9]+$/;
    if (inputCharacter.match(alphabetRegex)) {
      return true;
    }
    return false;
  }
}

export {
  isPalindrome,
};
