function rot13(codedStr) {
  function getDecryptedChar(char) {
    const charCode = char.charCodeAt() + 13;
    return String.fromCharCode(charCode > 90 ? (charCode % 90) + 64 : charCode);
  }
  let decryptedStr = '';
  [...codedStr].forEach(char => {
    if (char >= 'A' && char <= 'Z') {
      decryptedStr += getDecryptedChar(char);
    } else {
      decryptedStr += char;
    }
  });
  return decryptedStr;
}

export { rot13 };
