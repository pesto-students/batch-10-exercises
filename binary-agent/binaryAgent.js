
function binaryAgent(binaryInputString) {
  const words = binaryInputString.split(' ');
  let englishOutputString = '';
  for (let i = 0; i < words.length; i += 1) {
    englishOutputString += String.fromCharCode(parseInt(words[i], 2));
  }
  return englishOutputString;
}

export {
  binaryAgent,
};
