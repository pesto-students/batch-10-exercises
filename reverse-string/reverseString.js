
function reverseString(string) {
  const { length } = string;
  return string.split('').map((character, index) => string[length - index - 1]).join('');
}

export {
  reverseString,
};
