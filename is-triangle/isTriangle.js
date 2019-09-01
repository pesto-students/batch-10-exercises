
function isTriangle(...args) {
  const [smallSide, medSide, largeSide] = args.sort((a, b) => a - b);
  return smallSide + medSide > largeSide;
}

export {
  isTriangle,
};
