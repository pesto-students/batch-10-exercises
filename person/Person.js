class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const splitSlashes = this.dateOfBirth.split('');
    const isNumber = (str) => {
      const parse = Number(str);
      return !Number.isNaN(parse);
    };
    const filterNumbers = (char) => isNumber(char);
    const addDigits = (acc, num) => acc + Number(num);

    return splitSlashes
      .filter(filterNumbers)
      .reduce(addDigits, 0);
  }
}

export { Person };
