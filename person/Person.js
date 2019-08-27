class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  toString() {
    return this.name;
  }

  addDobDigits() {
    function isDigit(digitOrChar) {
      return !Number.isNaN(+digitOrChar);
    }
    function getDateDigits(dateOfBirth) {
      const unsanitizedDigits = [...dateOfBirth];
      const sanitizedDigits = [];
      unsanitizedDigits.forEach(element => {
        if (isDigit(element)) {
          const numericDigit = +element;
          sanitizedDigits.push(numericDigit);
        }
      });
      return sanitizedDigits;
    }
    const dateDigits = getDateDigits(this.dateOfBirth);
    const sumOfDigits = dateDigits.reduce((sum, digit) => sum + digit);

    return sumOfDigits;
  }
}

export { Person };
