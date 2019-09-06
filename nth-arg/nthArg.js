
function nthArg(index) {
  return (...args) => args[(index + args.length) % args.length];
}

export {
  nthArg,
};
