
function argsString(str, [...words]) {
  return str.replace('{}', words.map((word) => word));
}

export {
  argsString,
};
