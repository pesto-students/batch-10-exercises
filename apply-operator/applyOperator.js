function applyOperator(maybeOperator, ...operands) {
  function isOperator(maybeOperator) {
    return ['+', '-', '*', '/', '%'].indexOf(maybeOperator) >= 0;
  }
  if (maybeOperator.length === 0) {
    throw new Error('No Operator Specified');
  } else if (operands.length === 0) {
    return 0;
  } else if (isOperator(maybeOperator)) {
    const operator = maybeOperator;
    switch (operator) {
      case '+':
        return operands.reduce((sum, num) => sum + num, 0);
      case '-':
        return operands.reduce((result, num) => result - num, 0);
      case '*':
        return operands.reduce((result, num) => result * num, 1);
      case '/':
        return operands.reduce((result, num) => result / num, 1);
      case '%':
        return operands.reduce((result, num) => result % num);
      default:
        throw new Error(
          'Invalid Operator Specified. Allowed operators are "+", "-", "*", "/", "%" '
        );
    }
  }
}

export { applyOperator };
