function factorial(number) {
  if(typeof number != 'number'){
    throw "Expected a input of type number. You entered ${typeof number}";
  }

  if (number == 0 || number == 1 ) {
    return 1;
  }

  return number * factorial(number-1);
}

export {
  factorial
}