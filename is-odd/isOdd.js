function myIsEven(val) {
  if(val == 0)
    return true;
  else if(val < 0)
    return false;

  return myIsEven(val - 2);
}

function isOdd(...args) {
  return !myIsEven(Math.abs(args[0]));
}

export {
  isOdd,
};
