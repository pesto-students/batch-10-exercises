
function reverseString(inputString) {
  let reversedString = "";
  for (let eachCharacter of inputString) {
    reversedString = eachCharacter + reversedString;
  }
  return reversedString;

}

export {
  reverseString,
};
