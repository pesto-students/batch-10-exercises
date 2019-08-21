
function reverseString(str) {

  if(typeof str != 'string'){
    throw "Expected input should be a string.";
  }

  var reversedStr = '';
  while (str.length != 0){
    reversedStr += str.charAt(str.length-1);
    str = str.slice(0,-1);
  }

  return reversedStr;
}

export {
  reverseString,
};
