
function isPalindrome(value) {
  const ACCEPTED_STRING_REGEX = /[^a-zA-Z0-9]/g;
  const string = String(value).replace(ACCEPTED_STRING_REGEX, '').toLowerCase();
  return string === string.split('').reverse().join('');
}

export {
  isPalindrome,
};
