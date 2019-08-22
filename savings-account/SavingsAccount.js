
function SavingsAccount(accountNumber, email, firstName, lastName) {
  
  return {
    _accountNumber: accountNumber,
    _email: email,
    _firstName: firstName,
    _lastName: lastName,
    products: [],
  }
  
}

export {
  SavingsAccount,
};
