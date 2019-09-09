
function lastIndexOf(number, args) {
  for (let index = args.length - 1; index > -1; index -= 1) {
    if (args[index] === number) {
      return index;
    }
  }
  return -1;
}

export {
  lastIndexOf,
};
