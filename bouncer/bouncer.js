
function bouncer(impureArray) {
  function checkIfTruthy(element) {
    return element ? true : false;
  }
  const filteredArray = impureArray.filter(eachElement => checkIfTruthy(eachElement));
  return filteredArray;
}

export {
  bouncer,
};
