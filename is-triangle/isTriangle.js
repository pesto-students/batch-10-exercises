
function isTriangle(...args) {

  if(args.length != 3)
    return false;

  args.sort();

  return args[0] + args[1] > args[2];
}

export {
  isTriangle,
};
