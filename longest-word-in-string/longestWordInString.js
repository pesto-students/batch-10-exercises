/* eslint-disable arrow-body-style */

function longestWordInString(string) {
  const longestWordReducer = (longestWord, word) => {
    return longestWord.length > word.length ? longestWord : word;
  };
  return string.split(' ').reduce(longestWordReducer).length;
}

export {
  longestWordInString,
};
