function factorial(num) {
  let fact = 1;
  while (num > 1) {
    fact *= num;
    num -= 1;
  }
  return fact;
}

export { factorial };
