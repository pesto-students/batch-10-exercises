
function telephoneCheck(...inputString) {
  if (inputString.length < 1) {
    throw new Error('US phone number is at least 10 digits.');
  }
  const US_PHONE_REGEX = /^(1 )?(\(\d{3}\)|\d{3})(( |-)?\d{3}){2}\d{1}$/;
  return US_PHONE_REGEX.test(inputString);
}

export {
  telephoneCheck,
};
