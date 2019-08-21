function isPalindromeString(str) {

  if(str.length <= 1){
    return true;
  }

  var passedStr = str.slice(1, -1);

  return str[0] == str[str.length-1] && isPalindromeString(passedStr);
}

function isPalindrome(numberOrString) {

  if(typeof numberOrString != 'number' && typeof numberOrString != 'string'){
    throw `Expected input should of type String or Number. You entered $(typeof numberOrString)`; 
  }

  return isPalindromeString(numberOrString.toString());
}

export {
  isPalindrome,
};
