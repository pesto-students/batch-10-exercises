
function unnest(array) {
  const CheckedArray = Array.from(array);
  return CheckedArray.reduce((node, element) => node.concat(element), []);
}

export {
  unnest,
};
