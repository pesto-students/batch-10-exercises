
function alienAlphabet(inputAlphaArray) {
  const output = new Set();
  for (let i = 0; i < inputAlphaArray.length; i += 1) {
    const [...modifiedWord] = inputAlphaArray[i].split('');
    modifiedWord.every((value) => output.add(value));
  }
  return output;
}

export {
  alienAlphabet,
};
