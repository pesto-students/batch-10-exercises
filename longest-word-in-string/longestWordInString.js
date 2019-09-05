
function longestWordInString(string) {
  const words = string.split(' ');
  const wordLength = words.map( ( word )=>{
    return word.length;
  });
  return wordLength.sort((a, b) => a - b).pop();
}

export {
  longestWordInString,
};
