
class Person{
  constructor(FirstName ,  LastName , DOB) {
      this.firstName =  FirstName;
      this.lastName =  LastName;
      this.dateOfBirth =  DOB;
  }
  addDobDigits(){
    const RegExpToExtractNumbers = new RegExp('[^0-9]','g')
    const digits = this.dateOfBirth.replace(RegExpToExtractNumbers , '');

    const reducer = (accumulator, currentValue) => Number(accumulator) + Number(currentValue);

    const sum = digits.split('').reduce(reducer);
     return sum;
  }
}

export {
  Person,
};
