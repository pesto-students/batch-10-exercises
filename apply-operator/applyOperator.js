function applyOperator(...args) {
  let expr;
  if (args.length > 1) {
    if ((typeof args[1] === 'string') && ('+-*/%'.indexOf(args[0]) !== -1)) {
      // eslint-disable-next-line
      expr = args.forEach(function(value, index, arr) {
        if (index !== 0) {
          expr += value + (index < arr.length - 1 ? arr[0] : '');
        }
      });
      // eslint-disable-next-line
      return eval(expr);
    }
    throw new Error('Specify operator as string');
  }
  throw new Error('Operator not specified');
}

export {
  applyOperator,
};