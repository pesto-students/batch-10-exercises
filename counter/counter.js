function counter(...args) {
  var count = 0;
  return () => { return ++count; };
}

export {
  counter,
};
