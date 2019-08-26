function constImmutable() {
  const account = Object.freeze({
    username: 'pesto',
    password: 'initialPassword',
  });

  try {
    account.password = 's3cret';
  } catch (e) {
    // pass
  }

  return account.password;
}

export { constImmutable };
