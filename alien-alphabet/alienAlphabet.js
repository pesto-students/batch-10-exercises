
function alienAlphabet(words) {
  let firstLetter = [];
  let uniqueLetter = [];

  for(let i = 0 ;  i < words.length ; i++){
      let letters = words[i].split('');
      let first = letters.shift();

      if(firstLetter.indexOf(first) ==-1){
        firstLetter.push(first);
      }
      
      if(letters.length > 0){
        uniqueLetter.concat(letters);
      }
       
  }

  uniqueLetter.forEach(( letter ) => {
      if(firstLetter.indexOf( letter ) == -1){
        firstLetter.push(letter);
      }
  });

  return firstLetter;
}

export {
  alienAlphabet,
};
