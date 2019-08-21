
function counterFactory() {
  let incrementCounter = 0;
  let decrementCounter = 0;
  return {
    increment: () => {
      incrementCounter += 1;
      return incrementCounter;
    },
    decrement: () => {
      decrementCounter -= 1;
      return decrementCounter;
    },
  };
}

export {
  counterFactory,
};
