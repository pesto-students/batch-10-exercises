
function isPalindrome(string) {
  if(!isNaN){
    string = String(string);
  }

  const RegexToGetOnlyLetterAndNumber = '/[^a-z0-9]+/g';

  string = string.replace(RegexToGetOnlyLetterAndNumber,'').toLowerCase();
  const reversedString = string.split('').reverse().join('');
  if(string == reversedString){
    return true;
  }
  console.log(reversedString , string)

  return false;
}

export {
  isPalindrome,
};
