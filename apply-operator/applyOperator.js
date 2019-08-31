import { isUndefined } from 'util';

function applyOperator(inputOp, ...numbers) {
  if (isUndefined(inputOp)) {
    throw new Error('Expected operator string as argument.');
  }
  const addDefaultVal = (operator) => {
    if (['*', '/'].includes(operator)) {
      numbers.unshift(1);
    }
    if (['+', '-'].includes(operator)) {
      numbers.unshift(0);
    }
  };
  addDefaultVal(inputOp);
  // eslint-disable-next-line no-eval
  const reductionFn = (accumulator, value) => eval(accumulator + inputOp + value);
  return numbers
    .reduce(reductionFn);
}

export {
  applyOperator,
};
