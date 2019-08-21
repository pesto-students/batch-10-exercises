function counter(...args) {
  var mycounter = 1;
  function counterfunc() { mycounter++; };
  return counterfunc();
}

export {
  counter,
};
