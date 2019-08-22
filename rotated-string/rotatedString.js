
function rotatedString(...strings) {
  const [originalString, testString] = strings;
  // rotatedString should be different from originalString
  if (originalString === testString) return false;
  return originalString.concat(originalString).includes(testString);
}

export {
  rotatedString,
};
