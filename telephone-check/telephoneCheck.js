function telephoneCheck(phoneNumber) {
  const validPhoneFormatRegex = /^(1 )?(\([0-9]{3}\)\s?|[0-9]{3}-)[0-9]{3}-[0-9]{4}$/ig;

  const isValid = validPhoneFormatRegex.test(phoneNumber);
  return isValid;
}

export { telephoneCheck };
