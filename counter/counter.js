
function counter() {
  let counter = 1;
  return () => counter++ ;
}

export {
  counter,
};
