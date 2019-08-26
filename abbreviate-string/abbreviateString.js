
function abbreviateString(input) {
  if (typeof input !== 'string') {
    throw new Error(`Expected string. Received ${typeof input}`);
  }
  const stringArray = input.split(' ');
  let outputStr = '';
  if (stringArray.length > 1) {
    const abbrStr = stringArray[stringArray.length - 1].substring(0, 1);
    const capitilizedStr = abbrStr.toUpperCase();
    outputStr = stringArray[0].concat(' ').concat(capitilizedStr).concat('.');
  }
  return outputStr;
}

export {
  abbreviateString,
};
