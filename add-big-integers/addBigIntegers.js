function addBigIntegers(bigIntegersInput) {
  const bigIntegers = bigIntegersInput.split('\n').map(integer => {
    const bigInt = BigInt(`${integer}n`);
    return bigInt;
  });
  const summation = function(arr) {
    return arr.reduce((num1, num2) => num1 + num2);
  };
  const sum = BigInt(summation(bigIntegers));
  return sum.toString();
}

export { addBigIntegers };
