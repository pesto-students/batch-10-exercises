
function counterFactory() {
  let count = 0;
  return {
    increment() {
      count += 1;
      return count;
    },
    decrement() {
      count -= 1;
      return count;
    },
  };
}

export {
  counterFactory,
};
