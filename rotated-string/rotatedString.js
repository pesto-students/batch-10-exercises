
function rotatedString(...inputs) {
  const [string , testString] = inputs;
  if(testString === string){
    return false;
  }else{
    return true;
  }
}

export {
  rotatedString,
};
