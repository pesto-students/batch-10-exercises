class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    return this.dateOfBirth
      .split('')
      .filter(char => char !== '/')
      .map(digit => parseInt(digit))
      .reduce((x, y) => x + y);
  }
}

export { Person };
