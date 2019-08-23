
function applyOperator(operator, ...operands) {
  const arrayOperations = {
    '+': (array) => array.reduce((a, b) => a + b, 0),
    '-': (array) => array.reduce((a, b) => a - b, 0),
    '*': (array) => array.reduce((a, b) => a * b, 1),
    '/': (array) => array.reduce((a, b) => a / b, 1),
    '%': (array) => array.reduce((a, b) => a % b),
  };
  const operations = Object.getOwnPropertyNames(arrayOperations);
  if (!operations.includes(operator)) {
    throw new Error(`Invalid operator ${operator}. Allowed operators are ${operations.join(',')}`);
  }
  if (operands.length === 0) return 0;
  const result = arrayOperations[operator](operands);
  return result;
}

export {
  applyOperator,
};
