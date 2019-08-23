
function isEven(mayBeEvenNumber) {
  // eslint-disable-next-line no-bitwise
  return !(mayBeEvenNumber & 1);
}

export {
  isEven,
};
