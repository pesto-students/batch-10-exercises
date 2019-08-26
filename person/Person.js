/* eslint-disable no-restricted-globals */

class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const toNumber = (character) => parseInt(character, 10);
    const isNumber = (character) => !isNaN(toNumber(character));
    const sum = (a, b) => a + b;

    const digitsInDob = this.dateOfBirth
      .split('')
      .filter(isNumber)
      .map(toNumber);
    return digitsInDob.reduce(sum, 0);
  }
}

export {
  Person,
};
