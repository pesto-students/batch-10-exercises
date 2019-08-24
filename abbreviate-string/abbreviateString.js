
function abbreviateString(mayBeString) {
  if (typeof mayBeString !== 'string') {
    throw new Error(`abbreviateString expects string as input. Received ${typeof mayBeString}`);
  }
  const words = mayBeString.split(' ');
  const firstWord = words[0];
  const lastWord = words[words.length - 1];
  const abbreviatedLastWord = lastWord[0].toUpperCase();
  const abbrevation = `${firstWord} ${abbreviatedLastWord}.`;

  return abbrevation;
}

export {
  abbreviateString,
};
