
function applyOperator(...args) {
  console.log(args);

  var myOperator = args.shift();
  var ans = args.shift();
  var input = args;

  switch (myOperator) {
  case "+": 
    input.forEach(function (val) {
      ans += val;
    });
  break;
  case "-": 
    input.forEach(function (val) {
      ans -= val;
    });
  break;
  default :
    return ;
  }

  return ans;
}

export {
  applyOperator,
};
