function isEvenWithoutMod(val) {
  if(val == 0) {
    return true;
  }
  else if(val < 0) {
    return false;
  }

  return isEvenWithoutMod(val - 2);
}

function isEven(value) {
  return isEvenWithoutMod(Math.abs(value));
}

export {
  isEven,
};
