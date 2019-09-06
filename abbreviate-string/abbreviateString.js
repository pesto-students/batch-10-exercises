function abbreviateString(inputStr) {
  if (typeof inputStr !== "string") {
    throw new Error(
      `Invalid Input. Expected String, received ${typeof inputStr}`
    );
  }
  const splitString = inputStr.split(" ");
  const lastIndex = splitString.length - 1;
  const abbreviatedStr = `${splitString[0]} ${splitString[
    lastIndex
  ][0].toUpperCase()}.`;
  return abbreviatedStr;
}

export { abbreviateString };
