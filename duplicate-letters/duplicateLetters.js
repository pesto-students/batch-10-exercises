
function duplicateLetters(word) {
  const letters = word.split('');
  let Occurance = [];
  const x = letters.map(( letter ) => {
    if(!Occurance[letter] && isNaN(Occurance[letter]) ){
      Occurance[letter] = 1;
    }else{
      Occurance[letter] += 1;
    }  
  }); 
 
  const DuplicateLetterCount = Occurance.reduce((AddedValue, CurrentValue) => AddedValue + currentValue);
  return DuplicateLetterCount;
}

export {
  duplicateLetters,
};
