function applyOperator(...args) {
  const operator = args[0];
  const operators = ['+', '-', '*', '/', '%'];
  const numbers = args.filter(el => el !== operator);
  if (!operators.includes(operator)) {
    throw new Error('operator is not specified');
  }
  if (numbers.length === 0) {
    return 0;
  }
  if (numbers.length === 1 && operator === '-') {
    return eval(`${operator}${numbers[0]}`);
  }
  return eval(numbers.join(operator));
}

export { applyOperator };
