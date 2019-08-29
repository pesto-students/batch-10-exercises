
function booleanExpressionEvaluator(input) {
  if (typeof input !== 'string') {
    throw new Error(`Expected String. Received ${typeof input}`);
  }
  return JSON.parse(input);
}

export {
  booleanExpressionEvaluator,
};
