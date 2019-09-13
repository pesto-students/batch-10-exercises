
function booleanExpressionEvaluator(operation) {
  if(typeof operation !== 'string'){
    return false;
  }
  return eval(operation);
}

export {
  booleanExpressionEvaluator,
};
