
function alphabeticShift(str) {
  const getCharCode = (c) => c.charCodeAt(0);
  const shiftCodeBy1Place = (code) => code + 1;
  const split = (splitter) => (string) => string.split(splitter);

  const noSpaceSplitter = split('');
  const splitString = noSpaceSplitter(str);

  const shiftedCharacters = splitString.map(getCharCode).map(shiftCodeBy1Place);
  return String.fromCharCode(...shiftedCharacters);
}

export {
  alphabeticShift,
};
