
function abbreviateString(string) {

  if(string.length == 0){
    throw new Error('');
  }

  const words = string.split(' ');
  const firstWord = words[0];
  let newWord = [];
  let abbreviateWord = '';

  newWord.push(firstWord);
 
  if( words.length > 1 ){
    const lastWord = words[words.length - 1];
    abbreviateWord =  DoAbbreviate(lastWord);
  }else{
    abbreviateWord =  DoAbbreviate(firstWord);
  }

  newWord.push(abbreviateWord);
  return newWord.join(' ');
}

function DoAbbreviate(word){
  const FirstLetter = word[0];
  return FirstLetter.toUpperCase() + '.';
}

export {
  abbreviateString,
};
