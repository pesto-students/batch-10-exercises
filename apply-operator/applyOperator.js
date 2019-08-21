
function applyOperator(...args) {
  if (['+', '-', '*', '/', '%'].indexOf(args[0]) < 0 || args.length == 0) {
    throw new Error("No Operand Present");
  }
  else if (args.length === 1 && ['+', '-', '*', '/', '%'].indexOf(args[0]) >= 0) {
    return 0;
  }
  else if (['+', '-', '*', '/', '%'].indexOf(args[0]) >= 0) {
    switch (args[0]) {
      case '+': return args.slice[1].reduce((sum, num) => sum + num)
      case '-': return args.slice[1].reduce((result, num) => result - num)
      case '*': return args.slice[1].reduce((result, num) => result * num)
      case '/': return args.slice[1].reduce((result, num) => result / num)
      case '%': return args.slice[1].reduce((result, num) => result % num)
    }

  }
}

export {
  applyOperator,
};
