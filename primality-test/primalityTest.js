
function primalityTest(number) {
  for(let index = 2; index < number; index++)
    if(number % index === 0) return false;
  return number > 1;
}

export {
  primalityTest,
};
