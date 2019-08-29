
function knuthMorrisPratt(string , WordToBeSearched) {
  const MatchResult = string.match(WordToBeSearched);
  if(MatchResult){
    return MatchResult.index;
  }
  
  return -1;
}

export {
  knuthMorrisPratt,
};
