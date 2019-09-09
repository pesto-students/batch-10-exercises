
function alphabeticShift(string) {
  const arrayString = string.split('');
  const shiftedString = arrayString.map( (letter) =>{
    let CharCode = String( letter ).codePointAt();
    return String.fromCharCode(++CharCode);
  })

  return shiftedString.join('');
}

export {
  alphabeticShift,
};
