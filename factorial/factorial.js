
function myFactorial(val) {
  if (val == 0 || val == 1 ) 
    return 1;

  return val * myFactorial(val-1);
} 

function factorial(...args) {
  return myFactorial(args[0]);
}

export {
  factorial,
};
