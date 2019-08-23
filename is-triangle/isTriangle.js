
function isTriangle(sides) {
  sides.sort();
  //     smallest + greater > greatest
  return sides[0] + sides[1] > sides[2];
}

export {
  isTriangle,
};
