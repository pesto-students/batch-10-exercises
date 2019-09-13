
function bizarreStringIncrementer(string) {
  const RegEx = new RegExp('[a-zA-Z]');
  let splitString = string.split(RegEx);
  let lastNumber = splitString.pop();
  if(isNaN(lastNumber)){
    return splitString[0] + 1; 
  }else{
    return splitString.join('') + ++lastNumber;
  }
}

export {
  bizarreStringIncrementer,
};
