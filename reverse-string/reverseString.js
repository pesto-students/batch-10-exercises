function reverseString(string) {
  const reversedString = string
    .split('')
    .reverse()
    .join('');
  return reversedString;
}

export { reverseString };
