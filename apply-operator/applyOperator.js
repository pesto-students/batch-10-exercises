
function applyOperator(...args) {
  let result = 0;
  if (args.length === 1) {
    return result;
  }
  if (args[0] === '*' || args[0] === '/' || args[0] === '%') {
    result = 1;
  }
  for (let i = 1; i < args.length; i += 1) {
    if (args[0] === '+') {
      result = args[i] + result;
    } else if (args[0] === '-') {
      result -= args[i];
    } else if (args[0] === '*') {
      result *= args[i];
    } else if (args[0] === '/') {
      result /= args[i];
    } else if (args[0] === '%') {
      result %= args[i];
    }
  }
  return result;
}

export {
  applyOperator,
};
