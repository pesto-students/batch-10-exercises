
function bind(inputFunction, inputObject) {
  const thisObj = inputFunction;
  return function bindFunction() {
    return thisObj.apply(inputObject);
  };
}

export {
  bind,
};
