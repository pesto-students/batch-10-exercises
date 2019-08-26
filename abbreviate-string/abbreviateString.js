
function abbreviateString(str) {
  if (typeof str !== 'string') {
    throw new Error(`Expected a string. Instead, recieved ${typeof str}`);
  }
  const splitString = str.split(' ');
  const lastWord = splitString[splitString.length - 1];
  return `${splitString[0]} ${lastWord[0].toUpperCase()}.`;
}

export {
  abbreviateString,
};
