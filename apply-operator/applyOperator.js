
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
  case "-": 
    input.forEach(function (val) {
      ans -= val;
    });
  }

  return ans;
}

export {
  applyOperator,
};
