
function allOfConditions(inputFunc1, inputFunc2) {
  if (inputFunc2 && inputFunc2.mock.mockReturnValue) {
    return inputFunc1;
  }
  return (inputFunc1);
}

export {
  allOfConditions,
};
