
function repeatStringNumTimes(string, number) {
  const defaultString = '';
  return number > 0 ? string.repeat(number) : defaultString;
}

export {
  repeatStringNumTimes,
};
