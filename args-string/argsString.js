
function argsString(string , words) {
  words.forEach(element => {
    string = string.replace('{}' , element);
  });
  return string;
}

export {
  argsString,
};
