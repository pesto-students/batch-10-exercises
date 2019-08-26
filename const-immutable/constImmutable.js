/* eslint-disable no-underscore-dangle */

function constImmutable() {
  const account = {
    username: 'pesto',
    _password: 'initialPassword',
    get password() {
      return this._password;
    },
    set password(value) {
      return undefined;
    },
  };

  account.password = 's3cret';
  return account.password;
}
export {
  constImmutable,
};
