
function factorial(...args) {
  let result = 1;
  while (args > 1) {
    result *= args;
    // eslint-disable-next-line no-plusplus
    // eslint-disable-next-line no-param-reassign
    args -= 1;
  }
  return result;
}

export {
  factorial,
};
