
function reverseString(string) {
  if(typeof string !== "string"){
    throw `String was excepted but ${typeof binaryAgent} was supplied `;
  }
  return string.split("").reverse().join("");
}

export {
  reverseString,
};
