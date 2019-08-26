
function alphabeticShift(inputString) {
  const [...alphabet] = inputString.split('');
  const inc = (value) => (letter) => String.fromCharCode(value + letter);
  const incChar = inc(1);
  const toInt = (letter) => letter.charCodeAt(0);
  return alphabet.map((letter) => incChar(toInt(letter))).join('');
}

export {
  alphabeticShift,
};
