function repeatStringNumTimes(strToRepeat, noOfTimes) {
  if (noOfTimes < 0) {
    return '';
  }
  return strToRepeat.repeat(noOfTimes);
}

export { repeatStringNumTimes };
