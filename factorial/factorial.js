function factorial(num) {

  if(typeof num != 'number'){
    throw "Expected a number. You entered ${typeof num}";
  }

  if (num == 0 || num == 1 ) {
    return 1;
  }

  return num * factorial(num-1);
}

export {
  factorial,
};
