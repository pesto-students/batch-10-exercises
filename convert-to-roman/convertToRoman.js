
function convertToRoman(inputNumber) {
  if (typeof inputNumber !== 'number') {
    throw Error(`Expected number. Received ${typeof inputNumber}`);
  }

  const defaultRomanValue = 'I';
  let outputRomanText;
  switch (inputNumber) {
    case inputNumber < 4:
      outputRomanText = defaultRomanValue.repeat(inputNumber);
      break;
    case inputNumber === 4:
      outputRomanText = 'IV';
      break;
    case inputNumber === 5:
      outputRomanText = 'V';
      break;
    case inputNumber >= 10:
      outputRomanText = `X${defaultRomanValue.repeat(inputNumber - 10)}`;
      break;
    default:
      outputRomanText = defaultRomanValue;
      break;
  }
  return outputRomanText;
}

export {
  convertToRoman,
};
