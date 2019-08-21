
function rectangleDiagonal(...args) {

  if (args.length != 2)
    return ;

  return Math.sqrt( args[0] * args[0] + args[1] * args[1]);
}

export {
  rectangleDiagonal,
};
