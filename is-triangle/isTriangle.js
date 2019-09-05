
function isTriangle(...sides) {
  sides.sort();
  const [ small , medium , large ] = sides;
  const sumOfTwoSides = small + medium;
  return sumOfTwoSides > large; 
}

export {
  isTriangle,
};
