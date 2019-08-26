function allOfConditions(...callbacks) {
  const output = input => callbacks.every(fn => fn(input));
  return output;
}

export { allOfConditions };
