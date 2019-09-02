function rot13(str) {
  const output = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const input = 'NOPQRSTUVWXYZABCDEFGHIJKLM';
  const index = x => input.indexOf(x);
  const translate = x => (index(x) > -1 ? output[index(x)] : x);
  return str
    .split('')
    .map(translate)
    .join('');
}

export { rot13 };
