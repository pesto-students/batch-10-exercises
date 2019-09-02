function steamrollArray(inputArr) {
  const stringifiedInput = inputArr.toString();
  const outputStr = stringifiedInput.split('[').join('').split(']').join('').split(',').join('')
  return [...outputStr];
}

export { steamrollArray };
