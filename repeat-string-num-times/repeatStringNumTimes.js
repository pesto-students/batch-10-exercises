
function repeatStringNumTimes(string , numberOfTime) {
  let newString ='';
  for(let i = 1 ; i <= numberOfTime ; i++){
    newString += string;
  }
  return newString;
}

export {
  repeatStringNumTimes,
};
