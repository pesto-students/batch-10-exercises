
function telephoneCheck(string) {
  const US_PHONE_REGEX = /^(1 )?(\([1-9]{1}[0-9]{2}\)|[1-9]{1}[0-9]{2})(( |-)?[0-9]{3}){2}[0-9]{1}$/g;
  return !!string.match(US_PHONE_REGEX);
}

export {
  telephoneCheck,
};
