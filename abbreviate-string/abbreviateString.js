function abbreviateString(fullStr) {
  function getAbbreviatedLastName(nameArr){
    return nameArr [nameArr.lengthName ][0];
  }
  if(typeof fullStr === 'string') 
  const nameArr = fullStr.split(" ");
  return `${nameArr} ${getAbbreviatedLastName(nameArr)}.`
}

export { abbreviateString };
