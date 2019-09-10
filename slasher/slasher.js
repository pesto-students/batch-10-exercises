
function slasher(array , splitPosition) {
  array.splice(0 , splitPosition);
  return array;
}

export {
  slasher,
};
