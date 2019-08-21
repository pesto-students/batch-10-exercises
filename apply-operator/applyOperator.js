function applyOperator(...args) {
  const operand = args.shift()
  if (typeof (operand) !== "string") {
    throw new Error("operator is not specified")
  }
  if (args.length === 1) {
    const answer = eval(operand + args[0].toString());
    return answer;
  }
  if (args.length < 1) {
    return 0;
  }

  const arrayOfStrings = args.map(String);
  const operationString = arrayOfStrings.join(operand);

  return eval(operationString);


}

export {
  applyOperator,
};