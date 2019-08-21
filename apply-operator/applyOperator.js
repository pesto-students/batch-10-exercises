
function applyOperator(...args) {


  // If no operands are passed 
  if(args.length <= 1){
    return 0;
  }
  // Setting up operation 
  let operator = args.shift();
  return eval(args.join(operator));
}

export {
  applyOperator,
};
