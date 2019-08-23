
function abbreviateString(possibleString) {
  if( typeof possibleString != 'string' ) {
    throw new Error("throws error on invalid parameters");
  }

  const stringArray = possibleString.split(' ');
  const firstName = stringArray[0];
  const lastName = stringArray[stringArray.length - 1];
  const uppercaseLastLetterWithADot = lastName[0].toUpperCase() + '.';

  return firstName + " " + uppercaseLastLetterWithADot;
}

export {
  abbreviateString,
};
