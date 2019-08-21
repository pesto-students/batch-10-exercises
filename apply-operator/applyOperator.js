function applyOperator(operator, ...args) {
  if (!operator) throw Error('Operator required');
  if (args.length < 0) return 0;
  if (operator === '%' && args.length === 1) return args[0];

  let defaultValue = 1;
  if (operator === '+' || operator === '-') defaultValue = 0;
  // eslint-disable-next-line no-eval
  const result = args.reduce((acc, operand) => eval(`${acc}${operator}${operand}`), defaultValue);
  return result;
}

export { applyOperator };
