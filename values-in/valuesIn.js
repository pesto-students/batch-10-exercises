
function valuesIn(objects) {
  let keys = [];
  for( key in objects){
    keys.push(key);
  }
  return keys;
}

export {
  valuesIn,
};
