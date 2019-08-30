/* eslint-disable no-plusplus */

function counterFactory() {
  let counter = 0;
  return {
    increment: () => ++counter,
    decrement: () => --counter,
  };
}

export {
  counterFactory,
};
