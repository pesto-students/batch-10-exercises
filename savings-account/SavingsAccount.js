/* eslint-disable no-restricted-globals */
/* eslint-disable no-underscore-dangle */
const EMAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/g;
const LASTNAME_REGEX = /^[A-Za-z]+$/;
const MIN_FIRST_NAME_LENGTH = 3;
const MAX_FIRST_NAME_LENGTH = 20;

class SavingsAccount {
  set accountNumber(accountNumber) {
    if (accountNumber.length !== 6) {
      throw Error('Account Number must be a 6-digit number');
    }
    this._accountNumber = accountNumber;
  }

  set firstName(firstName) {
    if (firstName.length < MIN_FIRST_NAME_LENGTH || firstName.length > MAX_FIRST_NAME_LENGTH) {
      throw Error('First name must be between 3 and 20 characters long');
    }
    this._firstName = firstName;
  }

  set lastName(lastName) {
    if (!lastName.match(LASTNAME_REGEX)) {
      throw Error('Last name must contain english alphabets only');
    }
    this._lastName = lastName;
  }

  set email(email) {
    if (!email.match(EMAIL_REGEX)) {
      throw Error('Invalid e-mail');
    }
    this._email = email;
  }

  constructor(accountNumber, email, firstName, lastName) {
    this.products = [];
    this.accountNumber = accountNumber;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
export {
  SavingsAccount,
};
