function abbreviateString(string) {
  const words = string.split(' ');
  const firstWord = words[0];
  const lastWord = words[words.length - 1];
  const abbreviatedString = `${firstWord} ${lastWord.charAt(0).toUpperCase()}.`;
  return abbreviatedString;
}

export { abbreviateString };
