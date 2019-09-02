function rotatedString(normalStr, maybeRotatedStr) {
  if (normalStr === maybeRotatedStr) return false;
  const combinedStr = maybeRotatedStr.repeat(2);
  return combinedStr.includes(normalStr) > 0;
}

export { rotatedString };
