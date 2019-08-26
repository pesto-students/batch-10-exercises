
function addBigIntegers(args) {
  const inputString = args.split('\n');
  inputString.shift();
  const sumOfNum = (sum, value) => parseInt(sum, 10) + parseInt(value, 10);
  const sum = [...inputString].reduce(sumOfNum);
  return sum.toString();
}

export {
  addBigIntegers,
};
