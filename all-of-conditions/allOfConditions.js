
function allOfConditions(...inputFunc) {
  function fn(input) {
    const arr = [...inputFunc];
    arr.every((el) => el(input));
  }
  return fn;
}

export {
  allOfConditions,
};
